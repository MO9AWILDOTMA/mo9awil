import * as React from 'react'

const faq = {
  title: 'Questions Fréquemment Posées',
  // description: '',
  items: [
    {
      q: 'Qu’est-ce que la domiciliation d’entreprise ?',
      a: (
        <>
          La domiciliation d’entreprise offre à votre société une adresse 
          professionnelle enregistrée au Luxembourg. Ce service inclut la gestion du courrier, 
          le transfert postal et l’utilisation de notre adresse pour la documentation officielle.
        </>
      ),
    },
    {
      q: 'Combien de temps faut-il pour créer une société au Luxembourg ?',
      a: 'Le processus de création d’entreprise prend généralement 2 à 3 semaines après la soumission de tous les documents requis. Cela inclut l’enregistrement, l’acquisition d’un identifiant fiscal et l’ouverture de compte bancaire.',
    },
    {
      q: 'Quels services comptables sont inclus dans le forfait annuel ?',
      a: 'Notre forfait comptable annuel comprend la tenue de livres mensuelle, la préparation des déclarations fiscales, les états financiers, la gestion de la paie, les bilans trimestriels et la consultation pour l’optimisation fiscale.',
    },
    {
      q: 'Puis-je passer à un forfait supérieur plus tard ?',
      a: 'Oui, vous pouvez passer à un forfait supérieur à tout moment. Nous proposons des solutions flexibles qui s’adaptent à la croissance de votre entreprise et à l’évolution de vos besoins.',
    },
  ],
};


export default faq
