import type { Locale } from "@/lib/i18n/dictionaries"

interface LegalSection {
  title: string
  content: string[]
}

interface LegalContent {
  privacy: LegalSection[]
  terms: LegalSection[]
}

const ptBR: LegalContent = {
  privacy: [
    {
      title: "Política de Privacidade do Site www.retize.com.br",
      content: [
        "Quando você utiliza o site www.retize.com.br, você nos confia seus dados e informações. Nos comprometemos a manter essa confiança.",
        "Nesse sentido, a presente Política de Privacidade explica de maneira clara e acessível como as suas informações e dados serão coletados, usados, compartilhados e armazenados por meio dos nossos sistemas.",
        "A aceitação da nossa Política será feita quando você acessar ou usar o site, aplicativo ou serviços do site www.retize.com.br. Isso indicará que você está ciente e em total acordo com a forma como utilizaremos as suas informações e seus dados.",
      ],
    },
    {
      title: "1. Informações que Coletamos",
      content: [
        "1.1. Informações que você nos fornece: Dados de cadastro - Quando você se cadastra no site www.retize.com.br, você nos fornece informações como nome e e-mail.",
        "1.2. Informações geradas quando você usa nossos serviços: Registros de acesso - O site coleta automaticamente registros de acesso à aplicação, que incluem o endereço IP, com data e hora. Esses dados são de coleta obrigatória, de acordo com a Lei 12.965/2014.",
        "Dados de uso - Coletamos informações sobre suas interações no site, como sua navegação, as páginas ou outro conteúdo que você acessa ou cria, suas buscas, participações em pesquisas e outras ações.",
        "Características do equipamento - Para poder funcionar, o site coleta automaticamente dados sobre as características do seu aparelho, como sistema operacional, versão, informações de hardware, idioma, sinal de internet e bateria.",
        "Comunicações com o site - Quando você se comunica com o site, coletamos informações sobre sua comunicação, incluindo metadados como data, IP e hora das comunicações e todo o seu conteúdo.",
        "1.3. Informações de outras fontes: Outros usuários do site podem produzir informações sobre você, como referências, avaliações ou comentários.",
      ],
    },
    {
      title: "2. Como Usamos suas Informações",
      content: [
        "Prezamos muito pela sua privacidade. Todos os dados e informações sobre você são tratados como confidenciais, e somente os usaremos para os fins aqui descritos e autorizados por você.",
        "Poderemos utilizar seus dados para: Permitir que você acesse e utilize todas as funcionalidades do site; Enviar mensagens a respeito de suporte ou serviço; Nos comunicar sobre produtos, serviços, promoções, notícias e atualizações; Geração de leads para promoção das atividades; Cumprir obrigações legais.",
        "Exclusão dos dados: Todos os dados coletados serão excluídos de nossos servidores quando você assim requisitar, por procedimento gratuito e facilitado, ou quando não forem mais necessários. Nos casos de solicitação de exclusão, manteremos os dados por 6 meses para defesa de interesses da Retize ou de terceiros.",
        "O site se reserva no direito de monitorar toda a plataforma para assegurar que as regras descritas nos Termos de Uso estão sendo observadas.",
      ],
    },
    {
      title: "3. Compartilhamento das Informações",
      content: [
        "Todos os dados, informações e conteúdos sobre você podem ser considerados ativos no caso de negociações em que o site fizer parte. Nos reservamos no direito de incluir seus dados dentre os ativos da empresa caso esta venha a ser vendida, adquirida ou fundida com outra.",
        "O site se reserva no direito de fornecer seus dados e informações caso seja requisitado judicialmente, ato necessário para conformidade com as leis nacionais, ou caso você autorize expressamente.",
      ],
    },
    {
      title: "4. Direitos dos Titulares",
      content: [
        "Você sempre poderá optar em não divulgar seus dados para nós, mas alguns desses dados podem ser necessários para utilizar as funcionalidades das nossas aplicações.",
        "Seus direitos sob a LGPD incluem: Direito de acesso - requisitar e receber cópia dos dados pessoais que possuímos; Direito de retificação - solicitar correção dos seus dados pessoais; Direito de exclusão - solicitar a exclusão dos dados pessoais; Direito de oposição ao processamento; Direito de solicitar anonimização, bloqueio ou eliminação; Direito à portabilidade; Direito de retirar o consentimento; Direito à revisão de decisões automatizadas.",
        "Tentamos responder a todas as solicitações legítimas dentro de 5 dias úteis. Para exercer esses direitos, entre em contato pelo e-mail privacidade@retize.com.br.",
      ],
    },
    {
      title: "5. Segurança das Informações",
      content: [
        "Todos os seus dados são confidenciais e somente as pessoas com as devidas autorizações terão acesso a eles. Nossos servidores estão localizados em diferentes locais para garantir estabilidade e segurança.",
        "Todas as suas informações serão, sempre que possível, criptografadas. A qualquer momento você poderá requisitar cópia dos seus dados armazenados em nossos sistemas.",
        "Você é o único responsável por manter sua senha de acesso em local seguro e é vedado o compartilhamento desta com terceiros.",
      ],
    },
    {
      title: "6. Atualizações da Política de Privacidade",
      content: [
        "O site se reserva no direito de alterar essa Política quantas vezes forem necessárias, visando fornecer a você mais segurança, conveniência e melhorar a sua experiência.",
        "Caso sejam feitas alterações relevantes que ensejem novas autorizações suas, publicaremos uma nova política de privacidade, sujeita novamente ao seu consentimento.",
      ],
    },
    {
      title: "7. Lei Aplicável",
      content: [
        "Este documento é regido e deve ser interpretado de acordo com as leis da República Federativa do Brasil. Fica eleito o Foro da Comarca de São Paulo, SP, como o competente para dirimir quaisquer questões oriundas do presente documento.",
      ],
    },
  ],
  terms: [
    {
      title: "Termos de Uso do www.retize.com.br",
      content: [
        "Esta aplicação e seu conteúdo são controlados e operados pela própria Retize (RETIZE SPORTS MEDIA NETWORK LTDA). Todos os direitos reservados.",
        "Estes termos de uso têm por objeto definir as regras a serem seguidas para a utilização do site www.retize.com.br, sem prejuízo da aplicação da legislação vigente.",
        "AO UTILIZAR O SITE, VOCÊ AUTOMATICAMENTE CONCORDA COM ESTES TERMOS DE USO, RESPONSABILIZANDO-SE INTEGRALMENTE POR TODOS E QUAISQUER ATOS PRATICADOS POR VOCÊ NO SITE OU EM SERVIÇOS A ELE RELACIONADOS.",
      ],
    },
    {
      title: "1. O que é o www.retize.com.br?",
      content: [
        "1.1. Serviços: O site www.retize.com.br é um website que não oferece serviços, prestando-se como canal de comunicação entre a empresa Retize, seus parceiros, clientes, colaboradores, possíveis colaboradores, sociedade e mercado.",
        "1.2. Suspensão: Nos reservamos o direito de suspender ou cancelar, a qualquer momento, o seu acesso à aplicação em caso de suspeita de fraude, obtenção de benefício ou vantagem de forma ilícita, ou pelo não cumprimento de quaisquer condições previstas nestes Termos de Uso.",
      ],
    },
    {
      title: "2. Como acesso o www.retize.com.br?",
      content: [
        "2.1. Acesso: Para acessar o site e utilizar suas funcionalidades não é necessário efetuar qualquer tipo de cadastro.",
        "2.2. Idade de Utilização: Para utilizar o site, você deve ter pelo menos 18 (dezoito) anos. O site não coleta intencionalmente quaisquer informações ou dados de menores de 18 anos.",
      ],
    },
    {
      title: "3. Quais são os direitos do www.retize.com.br sobre a aplicação?",
      content: [
        "3.1. Nossos Direitos: Todos os direitos relativos ao www.retize.com.br e suas funcionalidades são de propriedade exclusiva do www.retize.com.br, inclusive no que diz respeito aos seus textos, imagens, layouts, software, códigos, bases de dados, gráficos, artigos, fotografias e demais conteúdos produzidos direta ou indiretamente.",
        "O Conteúdo é protegido pela lei de direitos autorais e de propriedade intelectual. É proibido usar, copiar, reproduzir, modificar, traduzir, publicar, transmitir, distribuir, executar, fazer o upload, exibir, licenciar, vender ou explorar e fazer engenharia reversa do Conteúdo, para qualquer finalidade, sem consentimento prévio e expresso.",
      ],
    },
    {
      title: "4. Propriedade Intelectual sobre o Software e os Materiais Disponibilizados",
      content: [
        "4.1. O www.retize.com.br garante que todos os direitos, título e interesse (incluindo direitos autorais, marcários e outros de propriedade intelectual) sobre o serviço disponibilizado permanecerão sob a titularidade do www.retize.com.br.",
        "4.2. O usuário não adquirirá nenhum direito de propriedade sobre os serviços e conteúdo, exceto quando haja outorga expressa neste Termos de Uso.",
        "4.3. É proibido que o usuário faça download de nosso conteúdo com o intuito de armazená-lo em banco de dados para oferecer para terceiro. Veda-se que o conteúdo disponibilizado seja usado para criar uma base de dados ou um serviço que possa concorrer de qualquer maneira com o nosso negócio.",
      ],
    },
    {
      title: "5. Reclamações sobre Violação de Direito Autoral",
      content: [
        "5.1. Alegações de infringência de direito autoral de qualquer conteúdo disponível no www.retize.com.br devem ser encaminhadas por meio do e-mail contato@retize.com.br.",
      ],
    },
    {
      title: "6. Responsabilidades do Usuário e do www.retize.com.br",
      content: [
        "6.1. Você é exclusivamente responsável pelo uso do www.retize.com.br e deverá respeitar as regras destes Termos de Uso, bem como a legislação aplicável.",
        "6.2. O www.retize.com.br, seu controlador, suas afiliadas, parceiras ou funcionários não serão responsabilizados por danos diretos ou indiretos que resultem de, ou que tenham relação com o acesso, uso ou a incapacidade de acessar ou utilizar o site.",
        "6.3. O site não se responsabiliza por interrupções ou suspensões de conexão, transmissões incompletas ou que falhem, bem como por falha técnica de qualquer tipo.",
        "6.4. Quando permitido por lei, o www.retize.com.br e os fornecedores ou distribuidores não serão responsáveis por perda de lucros, perda de receita, perda de dados, perdas financeiras ou por danos indiretos.",
        "6.5. É de sua inteira responsabilidade manter o ambiente de seu dispositivo seguro, com o uso de ferramentas disponíveis como antivírus e firewall.",
        "6.6. O site pode conter links para sites e aplicativos de terceiros. Isso não implica que o www.retize.com.br endossa, verifica ou garante qualquer ligação com os proprietários desses sites.",
      ],
    },
    {
      title: "7. Conteúdo do Usuário",
      content: [
        "7.1. O site poderá permitir que você ou qualquer outro usuário apresente, carregue, publique ou disponibilize conteúdo ou informações de texto, imagem, áudio ou vídeo.",
        "7.2. É proibido qualquer conteúdo de caráter difamatório, calunioso, injurioso, violento, pornográfico, obsceno, ofensivo ou ilícito.",
        "7.3. Qualquer Conteúdo de Usuário fornecido por você permanece de sua propriedade. Contudo, ao fornecê-lo você nos outorga uma licença em nível mundial, por prazo indeterminado, gratuita e transferível.",
        "7.4. O site poderá analisar, monitorar e remover Conteúdo de Usuário, a critério exclusivo, a qualquer momento e por qualquer motivo.",
      ],
    },
    {
      title: "8. Disposições Gerais",
      content: [
        "8.1. Estes Termos de Uso podem ser alterados a qualquer tempo para refletir ajustes realizados. Sempre que ocorrer qualquer modificação, você será previamente informado.",
        "8.2. Em caso de conflito entre estes termos e os termos modificados, os termos posteriores prevalecerão.",
        "8.3. Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer dúvidas serão solucionadas pelo Foro da Comarca de São Paulo, SP.",
        "8.4. Caso tenha alguma dúvida, comentário ou sugestão, entre em contato conosco por meio do e-mail contato@retize.com.br.",
        "8.5. Twitch: Ao clicar no botão de extensão da Twitch disponibilizado pela Retize, você concorda em compartilhar os dados requeridos pela extensão no momento da interação.",
      ],
    },
  ],
}

const en: LegalContent = {
  privacy: [
    {
      title: "Privacy Policy of www.retize.com.br",
      content: [
        "When you use the website www.retize.com.br, you trust us with your data and information. We are committed to maintaining that trust.",
        "This Privacy Policy explains clearly and accessibly how your information and data will be collected, used, shared, and stored through our systems.",
        "Acceptance of our Policy will occur when you access or use the website, application, or services of www.retize.com.br. This will indicate that you are aware and in full agreement with how we will use your information and data.",
      ],
    },
    {
      title: "1. Information We Collect",
      content: [
        "1.1. Information you provide: Registration data - When you register on www.retize.com.br, you provide information such as name and email.",
        "1.2. Information generated when you use our services: Access logs - The site automatically collects application access logs, including IP address, date and time. This data is mandatory per Law 12.965/2014.",
        "Usage data - We collect information about your interactions on the site, such as your browsing, pages or other content you access, your searches, participation in surveys, and other actions.",
        "Device characteristics - To function properly, the site automatically collects data about your device characteristics, such as operating system, version, hardware information, language, internet signal, and battery.",
        "Communications with the site - When you communicate with the site, we collect information about your communication, including metadata such as date, IP, and time of communications and all their content.",
        "1.3. Information from other sources: Other users of the site may produce information about you, such as references, reviews, or comments.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We greatly value your privacy. All data and information about you is treated as confidential, and we will only use it for the purposes described here and authorized by you.",
        "We may use your data to: Allow you to access and use all site features; Send you messages regarding support or services; Communicate about products, services, promotions, news, and updates; Lead generation for activity promotion; Comply with legal obligations.",
        "Data deletion: All collected data will be deleted from our servers when you request it, through a free and facilitated procedure, or when no longer necessary. In cases of deletion requests, we will keep data for 6 months for defense of Retize or third-party interests.",
        "The site reserves the right to monitor the entire platform to ensure that the rules described in the Terms of Use are being observed.",
      ],
    },
    {
      title: "3. Information Sharing",
      content: [
        "All data, information, and content about you may be considered assets in negotiations in which the site participates. We reserve the right to include your data among the company's assets if it is sold, acquired, or merged with another.",
        "The site reserves the right to provide your data and information if judicially required, necessary for compliance with national laws, or if you expressly authorize it.",
      ],
    },
    {
      title: "4. Data Subject Rights",
      content: [
        "You may always choose not to disclose your data to us, but some data may be necessary to use the features of our applications.",
        "Your rights under LGPD include: Right of access - request and receive a copy of personal data we hold; Right of rectification - request correction of your personal data; Right of deletion - request deletion of personal data; Right to oppose processing; Right to request anonymization, blocking, or elimination; Right to portability; Right to withdraw consent; Right to review automated decisions.",
        "We try to respond to all legitimate requests within 5 business days. To exercise these rights, contact us at privacidade@retize.com.br.",
      ],
    },
    {
      title: "5. Information Security",
      content: [
        "All your data is confidential and only authorized persons will have access to it. Our servers are located in different locations to ensure stability and security.",
        "All your information will be encrypted whenever possible. At any time, you may request a copy of your data stored in our systems.",
        "You are solely responsible for keeping your access password in a safe place and sharing it with third parties is prohibited.",
      ],
    },
    {
      title: "6. Privacy Policy Updates",
      content: [
        "The site reserves the right to change this Policy as many times as necessary, aiming to provide you with more security, convenience, and improve your experience.",
        "If relevant changes are made that require new authorizations from you, we will publish a new privacy policy, subject again to your consent.",
      ],
    },
    {
      title: "7. Applicable Law",
      content: [
        "This document is governed by and shall be interpreted in accordance with the laws of the Federative Republic of Brazil. The Court of Sao Paulo, SP, is elected as competent to resolve any issues arising from this document.",
      ],
    },
  ],
  terms: [
    {
      title: "Terms of Use of www.retize.com.br",
      content: [
        "This application and its content are controlled and operated by Retize (RETIZE SPORTS MEDIA NETWORK LTDA). All rights reserved.",
        "These terms of use define the rules to be followed for the use of the website www.retize.com.br, without prejudice to the application of current legislation.",
        "BY USING THE SITE, YOU AUTOMATICALLY AGREE TO THESE TERMS OF USE, TAKING FULL RESPONSIBILITY FOR ALL ACTS PERFORMED BY YOU ON THE SITE OR IN RELATED SERVICES.",
      ],
    },
    {
      title: "1. What is www.retize.com.br?",
      content: [
        "1.1. Services: www.retize.com.br is a website that does not offer services, serving as a communication channel between the company Retize, its partners, clients, employees, potential employees, society, and market.",
        "1.2. Suspension: We reserve the right to suspend or cancel your access to the application at any time in case of suspected fraud, obtaining benefits or advantages unlawfully, or for failure to comply with any conditions provided in these Terms of Use.",
      ],
    },
    {
      title: "2. How do I access www.retize.com.br?",
      content: [
        "2.1. Access: To access the site and use its features, no registration is required.",
        "2.2. Age of Use: To use the site, you must be at least 18 (eighteen) years old. The site does not intentionally collect any information or data from minors under 18.",
      ],
    },
    {
      title: "3. What are the rights of www.retize.com.br over the application?",
      content: [
        "3.1. Our Rights: All rights related to www.retize.com.br and its features are the exclusive property of www.retize.com.br, including its texts, images, layouts, software, codes, databases, graphics, articles, photographs, and other content produced directly or indirectly.",
        "The Content is protected by copyright and intellectual property law. It is prohibited to use, copy, reproduce, modify, translate, publish, transmit, distribute, perform, upload, display, license, sell, or exploit and reverse engineer the Content for any purpose without prior express consent.",
      ],
    },
    {
      title: "4. Intellectual Property over Software and Materials Provided",
      content: [
        "4.1. www.retize.com.br guarantees that all rights, title, and interest (including copyright, trademark, and other intellectual property rights) over the service provided will remain under the ownership of www.retize.com.br.",
        "4.2. The user will not acquire any property rights over the services and content, except when expressly granted in these Terms of Use.",
        "4.3. It is prohibited for the user to download our content with the intention of storing it in a database to offer to third parties. The content provided may not be used to create a database or service that could compete in any way with our business.",
      ],
    },
    {
      title: "5. Copyright Violation Complaints",
      content: [
        "5.1. Claims of copyright infringement of any content available on www.retize.com.br should be forwarded via email to contato@retize.com.br.",
      ],
    },
    {
      title: "6. Responsibilities of the User and www.retize.com.br",
      content: [
        "6.1. You are exclusively responsible for the use of www.retize.com.br and must respect the rules of these Terms of Use, as well as applicable legislation.",
        "6.2. www.retize.com.br, its controller, affiliates, partners, or employees shall not be liable for direct or indirect damages resulting from or related to access, use, or inability to access or use the site.",
        "6.3. The site is not responsible for interruptions or suspensions of connection, incomplete or failed transmissions, or technical failures of any kind.",
        "6.4. When permitted by law, www.retize.com.br and suppliers or distributors shall not be liable for loss of profits, revenue, data, financial losses, or indirect damages.",
        "6.5. It is your sole responsibility to maintain the security of your device environment using available tools such as antivirus and firewall.",
        "6.6. The site may contain links to third-party sites and applications. This does not imply that www.retize.com.br endorses, verifies, or guarantees any connection with the owners of those sites.",
      ],
    },
    {
      title: "7. User Content",
      content: [
        "7.1. The site may allow you or any other user to present, upload, publish, or make available text, image, audio, or video content or information.",
        "7.2. Any content of a defamatory, slanderous, injurious, violent, pornographic, obscene, offensive, or illicit nature is prohibited.",
        "7.3. Any User Content provided by you remains your property. However, by providing it, you grant us a worldwide, indefinite, free, and transferable license.",
        "7.4. The site may analyze, monitor, and remove User Content, at its sole discretion, at any time and for any reason.",
      ],
    },
    {
      title: "8. General Provisions",
      content: [
        "8.1. These Terms of Use may be changed at any time to reflect adjustments made. Whenever any modification occurs, you will be previously informed.",
        "8.2. In case of conflict between these terms and the modified terms, the later terms shall prevail.",
        "8.3. These Terms of Use are governed by the laws of the Federative Republic of Brazil. Any doubts shall be resolved by the Court of Sao Paulo, SP.",
        "8.4. If you have any questions, comments, or suggestions, please contact us via email at contato@retize.com.br.",
        "8.5. Twitch: By clicking on the Twitch extension button provided by Retize, you agree to share the data required by the extension at the time of interaction.",
      ],
    },
  ],
}

const es: LegalContent = {
  privacy: [
    {
      title: "Política de Privacidad de www.retize.com.br",
      content: [
        "Cuando utiliza el sitio www.retize.com.br, nos confía sus datos e información. Nos comprometemos a mantener esa confianza.",
        "Esta Política de Privacidad explica de manera clara y accesible cómo su información y datos serán recopilados, utilizados, compartidos y almacenados a través de nuestros sistemas.",
        "La aceptación de nuestra Política se realizará cuando acceda o utilice el sitio, aplicación o servicios de www.retize.com.br. Esto indicará que está al tanto y en total acuerdo con la forma en que utilizaremos su información y datos.",
      ],
    },
    {
      title: "1. Información que Recopilamos",
      content: [
        "1.1. Información que nos proporciona: Datos de registro - Cuando se registra en www.retize.com.br, nos proporciona información como nombre y correo electrónico.",
        "1.2. Información generada cuando usa nuestros servicios: Registros de acceso - El sitio recopila automáticamente registros de acceso a la aplicación, incluyendo dirección IP, fecha y hora. Estos datos son de recopilación obligatoria según la Ley 12.965/2014.",
        "Datos de uso - Recopilamos información sobre sus interacciones en el sitio, como su navegación, páginas u otro contenido al que accede, sus búsquedas, participación en encuestas y otras acciones.",
        "Características del equipo - Para funcionar, el sitio recopila automáticamente datos sobre las características de su dispositivo, como sistema operativo, versión, información de hardware, idioma, señal de internet y batería.",
        "Comunicaciones con el sitio - Cuando se comunica con el sitio, recopilamos información sobre su comunicación, incluyendo metadatos como fecha, IP y hora de las comunicaciones y todo su contenido.",
        "1.3. Información de otras fuentes: Otros usuarios del sitio pueden producir información sobre usted, como referencias, evaluaciones o comentarios.",
      ],
    },
    {
      title: "2. Cómo Usamos su Información",
      content: [
        "Valoramos mucho su privacidad. Todos los datos e información sobre usted se tratan como confidenciales y solo los utilizaremos para los fines aquí descritos y autorizados por usted.",
        "Podremos utilizar sus datos para: Permitirle acceder y utilizar todas las funcionalidades del sitio; Enviarle mensajes sobre soporte o servicio; Comunicarnos sobre productos, servicios, promociones, noticias y actualizaciones; Generación de leads para promoción de actividades; Cumplir obligaciones legales.",
        "Eliminación de datos: Todos los datos recopilados serán eliminados de nuestros servidores cuando usted lo solicite, mediante procedimiento gratuito y facilitado. En caso de solicitud de eliminación, mantendremos los datos por 6 meses para defensa de intereses de Retize o terceros.",
        "El sitio se reserva el derecho de monitorear toda la plataforma para asegurar que se observen las reglas descritas en los Términos de Uso.",
      ],
    },
    {
      title: "3. Compartir Información",
      content: [
        "Todos los datos, información y contenidos sobre usted pueden considerarse activos en negociaciones en las que participe el sitio. Nos reservamos el derecho de incluir sus datos entre los activos de la empresa en caso de venta, adquisición o fusión.",
        "El sitio se reserva el derecho de proporcionar sus datos e información si se requiere judicialmente, es necesario para el cumplimiento de las leyes nacionales o si usted lo autoriza expresamente.",
      ],
    },
    {
      title: "4. Derechos de los Titulares",
      content: [
        "Siempre podrá optar por no divulgar sus datos, pero algunos pueden ser necesarios para utilizar las funcionalidades de nuestras aplicaciones.",
        "Sus derechos bajo la LGPD incluyen: Derecho de acceso; Derecho de rectificación; Derecho de eliminación; Derecho de oposición al procesamiento; Derecho a solicitar anonimización, bloqueo o eliminación; Derecho a la portabilidad; Derecho a retirar el consentimiento; Derecho a revisión de decisiones automatizadas.",
        "Intentamos responder a todas las solicitudes legítimas dentro de 5 días hábiles. Para ejercer estos derechos, contáctenos en privacidade@retize.com.br.",
      ],
    },
    {
      title: "5. Seguridad de la Información",
      content: [
        "Todos sus datos son confidenciales y solo las personas debidamente autorizadas tendrán acceso. Nuestros servidores están ubicados en diferentes lugares para garantizar estabilidad y seguridad.",
        "Toda su información será encriptada siempre que sea posible. En cualquier momento puede solicitar una copia de sus datos almacenados en nuestros sistemas.",
        "Usted es el único responsable de mantener su contraseña de acceso en un lugar seguro y está prohibido compartirla con terceros.",
      ],
    },
    {
      title: "6. Actualizaciones de la Política de Privacidad",
      content: [
        "El sitio se reserva el derecho de modificar esta Política cuantas veces sea necesario, con el objetivo de brindarle más seguridad, conveniencia y mejorar su experiencia.",
        "Si se realizan cambios relevantes que requieran nuevas autorizaciones, publicaremos una nueva política de privacidad, sujeta nuevamente a su consentimiento.",
      ],
    },
    {
      title: "7. Ley Aplicable",
      content: [
        "Este documento se rige e interpreta de acuerdo con las leyes de la República Federativa de Brasil. Se elige el Foro de la Comarca de São Paulo, SP, como competente para resolver cualquier cuestión derivada de este documento.",
      ],
    },
  ],
  terms: [
    {
      title: "Términos de Uso de www.retize.com.br",
      content: [
        "Esta aplicación y su contenido son controlados y operados por Retize (RETIZE SPORTS MEDIA NETWORK LTDA). Todos los derechos reservados.",
        "Estos términos de uso definen las reglas a seguir para el uso del sitio www.retize.com.br, sin perjuicio de la aplicación de la legislación vigente.",
        "AL UTILIZAR EL SITIO, USTED AUTOMÁTICAMENTE ACEPTA ESTOS TÉRMINOS DE USO, RESPONSABILIZÁNDOSE INTEGRALMENTE POR TODOS LOS ACTOS REALIZADOS EN EL SITIO O EN SERVICIOS RELACIONADOS.",
      ],
    },
    {
      title: "1. ¿Qué es www.retize.com.br?",
      content: [
        "1.1. Servicios: www.retize.com.br es un sitio web que no ofrece servicios, sirviendo como canal de comunicación entre la empresa Retize, sus socios, clientes, colaboradores, posibles colaboradores, sociedad y mercado.",
        "1.2. Suspensión: Nos reservamos el derecho de suspender o cancelar su acceso a la aplicación en cualquier momento en caso de sospecha de fraude, obtención de beneficios de forma ilícita o incumplimiento de las condiciones previstas en estos Términos de Uso.",
      ],
    },
    {
      title: "2. ¿Cómo accedo a www.retize.com.br?",
      content: [
        "2.1. Acceso: Para acceder al sitio y utilizar sus funcionalidades no es necesario realizar ningún tipo de registro.",
        "2.2. Edad de uso: Para utilizar el sitio, debe tener al menos 18 (dieciocho) años. El sitio no recopila intencionalmente información o datos de menores de 18 años.",
      ],
    },
    {
      title: "3. ¿Cuáles son los derechos de www.retize.com.br sobre la aplicación?",
      content: [
        "3.1. Nuestros Derechos: Todos los derechos relativos a www.retize.com.br y sus funcionalidades son propiedad exclusiva de www.retize.com.br, incluyendo textos, imágenes, layouts, software, códigos, bases de datos, gráficos, artículos, fotografías y demás contenidos.",
        "El Contenido está protegido por la ley de derechos de autor y propiedad intelectual. Está prohibido usar, copiar, reproducir, modificar, traducir, publicar, transmitir, distribuir, ejecutar, cargar, exhibir, licenciar, vender o explotar y realizar ingeniería inversa del Contenido sin consentimiento previo y expreso.",
      ],
    },
    {
      title: "4. Propiedad Intelectual sobre el Software y los Materiales",
      content: [
        "4.1. www.retize.com.br garantiza que todos los derechos, título e interés (incluyendo derechos de autor, marcas y otros de propiedad intelectual) sobre el servicio permanecen bajo la titularidad de www.retize.com.br.",
        "4.2. El usuario no adquirirá ningún derecho de propiedad sobre los servicios y contenido, excepto cuando haya otorgamiento expreso en estos Términos de Uso.",
        "4.3. Está prohibido que el usuario descargue nuestro contenido con la intención de almacenarlo en una base de datos para ofrecer a terceros. El contenido no puede usarse para crear una base de datos o servicio que pueda competir con nuestro negocio.",
      ],
    },
    {
      title: "5. Reclamaciones sobre Violación de Derechos de Autor",
      content: [
        "5.1. Las alegaciones de infracción de derechos de autor de cualquier contenido disponible en www.retize.com.br deben enviarse por correo electrónico a contato@retize.com.br.",
      ],
    },
    {
      title: "6. Responsabilidades del Usuario y de www.retize.com.br",
      content: [
        "6.1. Usted es exclusivamente responsable del uso de www.retize.com.br y deberá respetar las reglas de estos Términos de Uso y la legislación aplicable.",
        "6.2. www.retize.com.br, su controlador, afiliadas, socios o empleados no serán responsables por daños directos o indirectos que resulten del acceso, uso o incapacidad de acceder o utilizar el sitio.",
        "6.3. El sitio no se responsabiliza por interrupciones o suspensiones de conexión, transmisiones incompletas o fallidas, ni por fallas técnicas de cualquier tipo.",
        "6.4. Cuando lo permita la ley, www.retize.com.br y los proveedores o distribuidores no serán responsables por pérdida de ganancias, ingresos, datos, pérdidas financieras o daños indirectos.",
        "6.5. Es su entera responsabilidad mantener seguro el entorno de su dispositivo utilizando herramientas disponibles como antivirus y firewall.",
        "6.6. El sitio puede contener enlaces a sitios y aplicaciones de terceros. Esto no implica que www.retize.com.br respalde, verifique o garantice conexión alguna con los propietarios de esos sitios.",
      ],
    },
    {
      title: "7. Contenido del Usuario",
      content: [
        "7.1. El sitio puede permitir que usted u otro usuario presente, cargue, publique o ponga a disposición contenido o información de texto, imagen, audio o vídeo.",
        "7.2. Está prohibido cualquier contenido de carácter difamatorio, calumnioso, injurioso, violento, pornográfico, obsceno, ofensivo o ilícito.",
        "7.3. Cualquier Contenido de Usuario proporcionado por usted permanece de su propiedad. Sin embargo, al proporcionarlo, nos otorga una licencia mundial, indefinida, gratuita y transferible.",
        "7.4. El sitio puede analizar, monitorear y eliminar Contenido de Usuario, a su exclusivo criterio, en cualquier momento y por cualquier motivo.",
      ],
    },
    {
      title: "8. Disposiciones Generales",
      content: [
        "8.1. Estos Términos de Uso pueden modificarse en cualquier momento para reflejar ajustes realizados. Siempre que ocurra cualquier modificación, será previamente informado.",
        "8.2. En caso de conflicto entre estos términos y los términos modificados, prevalecerán los términos posteriores.",
        "8.3. Estos Términos de Uso se rigen por las leyes de la República Federativa de Brasil. Cualquier duda será resuelta por el Foro de la Comarca de São Paulo, SP.",
        "8.4. Si tiene alguna duda, comentario o sugerencia, contáctenos por correo electrónico a contato@retize.com.br.",
        "8.5. Twitch: Al hacer clic en el botón de extensión de Twitch proporcionado por Retize, acepta compartir los datos requeridos por la extensión en el momento de la interacción.",
      ],
    },
  ],
}

export const legalContent: Record<Locale, LegalContent> = {
  "pt-BR": ptBR,
  en,
  es,
}
