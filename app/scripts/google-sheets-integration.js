// Google Apps Script for Mo9awil Quote Form Integration
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Get the active spreadsheet by ID (more reliable than getting active)
    const SPREADSHEET_ID = "1oafOApIjUK_MamufoyHSIWSgvSGMo4-FOU0QXR4mfY8";
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();

    // Parse the form data
    const data = JSON.parse(e.postData.contents);

    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 9).setValues([[
        "Name", "Email", "Phone", "Services", "Message", "Status", "Language", "Timezone", "Timestamp"
      ]]);

      const headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("white");
    }

    // Prepare the data
    const timestamp = new Date();
    const services = Array.isArray(data.services) ? data.services.join(", ") : data.services || "None selected";
    const status = "New";
    
    sheet.appendRow([
      data.name || "",
      data.email || "",
      data.phone || "",
      services,
      data.message || "",
      status,
      data.language || "unknown",
      data.timezone || "unknown",
      timestamp
    ]);

    // Auto-resize columns
    sheet.autoResizeColumns(1, 9);

    // Send email notification
    sendEmailNotification(data);

    // Return success response with CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Quote request submitted successfully",
        timestamp: timestamp.toISOString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error("Error processing form submission:", error);

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error submitting quote request: " + error.toString(),
        error: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for CORS preflight)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "Mo9awil Quote Form API is running",
      status: "OK"
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Send email notification when a new quote is submitted
function sendEmailNotification(data) {
  try {
    // Email addresses from your environment
    const supportEmail = "support@mo9awil.ma";
    const adminEmail = "admin@mo9awil.ma";

    const subject = "New Quote Request - Mo9awil";
    const body = `
New quote request received from Mo9awil website:

📋 CUSTOMER DETAILS:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

🛍️ SERVICES REQUESTED:
${Array.isArray(data.services) ? "• " + data.services.join("\n• ") : data.services || "None selected"}

💬 MESSAGE:
${data.message || "No additional message"}

🌍 ADDITIONAL INFO:
Language: ${data.language || "Not specified"}
Timezone: ${data.timezone || "Not specified"}

⏰ SUBMITTED: ${new Date().toLocaleString()}

Please follow up with the client within 24 hours.

---
Mo9awil Business Solutions
View all submissions: https://docs.google.com/spreadsheets/d/1oafOApIjUK_MamufoyHSIWSgvSGMo4-FOU0QXR4mfY8/edit
    `;

    // Send emails to both support and admin
    GmailApp.sendEmail(supportEmail, subject, body);
    GmailApp.sendEmail(adminEmail, subject, body);
    
    // Also send confirmation email to customer
    sendCustomerConfirmation(data);

  } catch (error) {
    console.error("Error sending email notification:", error);
    // Don't throw error here to avoid breaking the main form submission
  }
}

// Send confirmation email to customer
function sendCustomerConfirmation(data) {
  try {
    const subject = "Quote Request Received - Mo9awil";
    const body = `
Dear ${data.name},

Thank you for your interest in Mo9awil Business Solutions!

We have received your quote request for the following services:
${Array.isArray(data.services) ? "• " + data.services.join("\n• ") : data.services || "None selected"}

Our team will review your request and get back to you within 24 hours at ${data.email}.

If you have any urgent questions, please don't hesitate to contact us at support@mo9awil.ma.

Best regards,
Mo9awil Team

---
Mo9awil Business Solutions
Website: https://mo9awil.ma
Email: support@mo9awil.ma
    `;

    GmailApp.sendEmail(data.email, subject, body);
  } catch (error) {
    console.error("Error sending customer confirmation:", error);
  }
}

// Test function to verify the setup
function testSetup() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "+212600000000",
    services: ["company_creation", "website_creation"],
    message: "This is a test submission",
    language: "en",
    timezone: "Africa/Casablanca"
  };

  const testEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(testEvent);
  console.log("Test result:", result.getContent());
}

// Function to get form submissions (optional - for dashboard)
function getFormSubmissions() {
  try {
    const SPREADSHEET_ID = "1oafOApIjUK_MamufoyHSIWSgvSGMo4-FOU0QXR4mfY8";
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    const data = sheet.getDataRange().getValues();

    if (data.length <= 1) {
      return [];
    }

    const headers = data[0];
    const submissions = data.slice(1).map((row) => {
      const submission = {};
      headers.forEach((header, index) => {
        submission[header] = row[index];
      });
      return submission;
    });

    return submissions;
  } catch (error) {
    console.error("Error getting submissions:", error);
    return [];
  }
}