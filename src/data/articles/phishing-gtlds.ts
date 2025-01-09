import type { Article } from '../../types/article';

export const phishingGtldsArticle: Article = {
  id: 'phishing-gtlds-threat',
  date: '2025-01-09',
  type: 'security',
  image: 'https://krebsonsecurity.com/wp-content/uploads/2024/07/phishtrap-768x469.png',
  title: 'Több Insight: Why Phishers Exploit New gTLDs and How We Protect Against Them',
  titleEs: 'Perspectiva Több: Por Qué los Estafadores Explotan los Nuevos gTLD y Cómo los Protegemos',
  description: 'In the ever-evolving digital landscape, cybercriminals are seizing opportunities presented by new generic top-level domains (gTLDs) like .shop, .top, and .xyz to orchestrate phishing attacks.',
  descriptionEs: 'En el panorama digital en constante evolución, los ciberdelincuentes aprovechan las oportunidades que ofrecen los nuevos dominios genéricos de nivel superior (gTLD) como .shop, .top y .xyz para llevar a cabo ataques de phishing.',
  highlights: [
    {
      text: 'New gTLDs represent 37% of reported cybercrime domains despite being only 11% of new registrations',
      textEs: 'Los nuevos gTLD representan el 37% de los dominios reportados por delitos cibernéticos a pesar de ser solo el 11% de los nuevos registros'
    },
    {
      text: '40% increase in phishing attacks fueled by low-cost domain registrations',
      textEs: 'Aumento del 40% en ataques de phishing impulsados por registros de dominios de bajo costo'
    },
    {
      text: 'U.S. Postal Service becomes most-phished entity in 2024',
      textEs: 'El Servicio Postal de EE.UU. se convierte en la entidad más suplantada en 2024'
    },
    {
      text: 'Több employs AI-driven real-time threat detection and monitoring',
      textEs: 'Több emplea detección y monitoreo de amenazas en tiempo real impulsado por IA'
    }
  ],
  tags: ['phishing', 'cybersecurity', 'domains', 'threat-intelligence'],
  readingTime: 6,
  content: `## The Exploitation of New gTLDs
New gTLDs introduced in recent years now account for only 11% of all new domains but represent a staggering 37% of reported cybercrime domains. These domains are attractive to scammers for several reasons:

- Minimal Verification: Many registrars offer domains for under $2, with little to no identity checks.
- Low Cost: Prices as low as $1 make it easy for criminals to buy domains in bulk.
- Mass Registration: Automated tools allow for the rapid creation of phishing sites.

## The Growing Threat
Recent reports highlight a 40% increase in phishing attacks, fueled by these low-cost domains. Key findings include:

- Target Shifts: The U.S. Postal Service became the most-phished entity in 2024, surpassing tech giants like Apple and Google.
- Subdomain Exploitation: Criminals increasingly use platforms like Blogspot and Weebly, which provide subdomains, making it harder to block malicious activity without collateral damage.

## Több's Countermeasures
At Több, we combat these threats with a multi-layered approach that combines cybersecurity, AI, and proactive measures:

- Real-Time Threat Detection: Our AI algorithms analyze domain activity and flag anomalies indicative of phishing schemes.
- Subdomain Monitoring: We track subdomain abuse across platforms, enabling faster identification of malicious activity.
- Secure Solutions: By enhancing client systems with advanced anti-phishing measures, Több mitigates the impact of scams targeting their businesses.

## Regulatory Challenges and Our Advocacy
ICANN's plans to introduce even more gTLDs in 2026 raise concerns about regulatory oversight. Without stricter registration policies, these domains will continue to be exploited. Több advocates for:

- Stricter Identity Verification: Ensuring domain buyers are properly vetted.
- Pricing Controls: Discouraging bulk purchases by raising costs for high-risk gTLDs.
- Collaboration: Partnering with organizations like the Anti-Phishing Working Group to create industry-wide standards.

## Looking Ahead
As phishing tactics evolve, so must our defenses. At Több, we are committed to staying ahead of cybercriminals by innovating and adapting. With our expertise, businesses can trust that their digital environments are secure against even the most sophisticated threats.

Több: Defending the Future of Digital Trust.`,
  contentEs: `## La Explotación de los Nuevos gTLD
Los nuevos gTLD introducidos en los últimos años representan solo el 11% de todos los dominios nuevos, pero abarcan un alarmante 37% de los dominios reportados por delitos cibernéticos. Estos dominios son atractivos para los estafadores debido a:

- Verificación Mínima: Muchos registradores ofrecen dominios por menos de $2, con poca o ninguna verificación de identidad.
- Costos Bajos: Precios tan bajos como $1 facilitan a los delincuentes la compra masiva de dominios.
- Registro Masivo: Herramientas automatizadas permiten la creación rápida de sitios de phishing.

## La Creciente Amenaza
Informes recientes destacan un aumento del 40% en los ataques de phishing, impulsados por estos dominios de bajo costo. Hallazgos clave incluyen:

- Cambio de Objetivos: En 2024, el Servicio Postal de EE.UU. se convirtió en la entidad más suplantada, superando a gigantes tecnológicos como Apple y Google.
- Explotación de Subdominios: Los criminales utilizan cada vez más plataformas como Blogspot y Weebly, lo que dificulta bloquear actividades maliciosas sin afectar a usuarios legítimos.

## Medidas de Protección de Több
En Több combatimos estas amenazas con un enfoque integral que combina ciberseguridad, inteligencia artificial y medidas proactivas:

- Detección en Tiempo Real: Nuestros algoritmos de IA analizan la actividad de dominios y detectan anomalías indicativas de esquemas de phishing.
- Monitoreo de Subdominios: Seguimos el abuso de subdominios en diversas plataformas, permitiendo una identificación más rápida de actividades maliciosas.
- Soluciones Seguras: Reforzamos los sistemas de nuestros clientes con medidas avanzadas contra el phishing para mitigar el impacto de estas estafas.

## Desafíos Regulatorios y Nuestra Abogacía
Los planes de ICANN para introducir más gTLD en 2026 generan preocupaciones sobre la supervisión regulatoria. Sin políticas de registro más estrictas, estos dominios seguirán siendo explotados. En Több abogamos por:

- Verificación de Identidad Más Estricta: Asegurar que los compradores de dominios sean debidamente evaluados.
- Controles de Precios: Desincentivar las compras masivas al aumentar los costos de gTLD de alto riesgo.
- Colaboración: Asociarnos con organizaciones como el Anti-Phishing Working Group para establecer estándares en toda la industria.

## Mirando al Futuro
A medida que evolucionan las tácticas de phishing, también deben hacerlo nuestras defensas. En Több, estamos comprometidos con adelantarnos a los ciberdelincuentes mediante la innovación y la adaptación. Con nuestra experiencia, las empresas pueden confiar en que sus entornos digitales están protegidos contra incluso las amenazas más sofisticadas.

Több: Defendiendo el Futuro de la Confianza Digital.`
};
