// Google Apps Script for Mo9awil Quote Form Integration
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Get the active spreadsheet
    // Make sure to create a Google Sheet named "Mo9awil Quotes" or update the name below
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

    // Parse the form data
    const data = JSON.parse(e.postData.contents)

    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 7).setValues([["Timestamp", "Name", "Email", "Phone", "Services", "Message", "Status"]])

      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 7)
      headerRange.setFontWeight("bold")
      headerRange.setBackground("#4285f4")
      headerRange.setFontColor("white")
    }

    // Prepare the data
    const timestamp = new Date()
    const services = Array.isArray(data.services) ? data.services.join(", ") : data.services || "None selected"
    const status = "New"

    // Add the new row
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.email || "",
      data.phone || "",
      services,
      data.message || "",
      status,
    ])

    // Auto-resize columns
    sheet.autoResizeColumns(1, 7)

    // Optional: Send email notification
    sendEmailNotification(data)

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Quote request submitted successfully",
        timestamp: timestamp.toISOString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    console.error("Error processing form submission:", error)

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error submitting quote request: " + error.toString(),
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

// Optional: Send email notification when a new quote is submitted
function sendEmailNotification(data) {
  try {
    // Update this email address to receive notifications
    const notificationEmail = "your-email@example.com"

    const subject = "New Quote Request - Mo9awil"
    const body = `
New quote request received from Mo9awil website:

📋 CUSTOMER DETAILS:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

🛍️ SERVICES REQUESTED:
${Array.isArray(data.services) ? data.services.join("\n• ") : data.services || "None selected"}

💬 MESSAGE:
${data.message || "No additional message"}

⏰ SUBMITTED: ${new Date().toLocaleString()}

Please follow up with the client within 24 hours.

---
Mo9awil Business Solutions
    `

    // Send the email
    GmailApp.sendEmail(notificationEmail, subject, body)
  } catch (error) {
    console.error("Error sending email notification:", error)
    // Don't throw error here to avoid breaking the main form submission
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
  }

  const testEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  }

  const result = doPost(testEvent)
  console.log("Test result:", result.getContent())
}

// Function to get form submissions (optional - for dashboard)
function getFormSubmissions() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    const data = sheet.getDataRange().getValues()

    if (data.length <= 1) {
      return []
    }

    const headers = data[0]
    const submissions = data.slice(1).map((row) => {
      const submission = {}
      headers.forEach((header, index) => {
        submission[header] = row[index]
      })
      return submission
    })

    return submissions
  } catch (error) {
    console.error("Error getting submissions:", error)
    return []
  }
}
