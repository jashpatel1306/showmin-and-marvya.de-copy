export interface Partner {
  id: string;
  name: string;
  logo: string;
  description?: string;
  website?: string;
}

export const partners: Partner[] = [
  {
    id: 'pathway',
    name: 'Pathway',
    logo: '/pathway-logo.png',
    description: 'Advanced analytics platform',
    website: 'https://pathway.com'
  },
  {
    id: 'descartes',
    name: 'DESCARTES pixi',
    logo: '/descartes-logo.png',
    description: 'E-commerce solutions',
    website: 'https://descartes.com'
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    logo: '/klaviyo-logo.png',
    description: 'Email marketing platform',
    website: 'https://klaviyo.com'
  },
  {
    id: 'gorgias',
    name: 'Gorgias',
    logo: '/gorgias-logo.png',
    description: 'Helpdesk for e-commerce',
    website: 'https://gorgias.com'
  },
  {
    id: 'trustshop',
    name: 'TrustShop',
    logo: '/trustshop-logo.png',
    description: 'Customer reviews platform',
    website: 'https://trustshop.io'
  }
];
