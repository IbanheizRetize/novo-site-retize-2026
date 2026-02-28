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
      title: "Politica de Privacidade do Site www.retize.com.br",
      content: [
        "Quando voce utiliza o site www.retize.com.br, voce nos confia seus dados e informacoes. Nos comprometemos a manter essa confianca.",
        "Nesse sentido, a presente Politica de Privacidade explica de maneira clara e acessivel como as suas informacoes e dados serao coletados, usados, compartilhados e armazenados por meio dos nossos sistemas.",
        "A aceitacao da nossa Politica sera feita quando voce acessar ou usar o site, aplicativo ou servicos do site www.retize.com.br. Isso indicara que voce esta ciente e em total acordo com a forma como utilizaremos as suas informacoes e seus dados.",
      ],
    },
    {
      title: "1. Informacoes que Coletamos",
      content: [
        "1.1. Informacoes que voce nos fornece: Dados de cadastro - Quando voce se cadastra no site www.retize.com.br, voce nos fornece informacoes como nome e email.",
        "1.2. Informacoes geradas quando voce usa nossos servicos: Registros de acesso - O site coleta automaticamente registros de acesso a aplicacao, que incluem o endereco IP, com data e hora. Esses dados sao de coleta obrigatoria, de acordo com a Lei 12.965/2014.",
        "Dados de uso - Coletamos informacoes sobre suas interacoes no site, como sua navegacao, as paginas ou outro conteudo que voce acessa ou cria, suas buscas, participacoes em pesquisas e outras acoes.",
        "Caracteristicas do equipamento - Para poder funcionar, o site coleta automaticamente dados sobre as caracteristicas do seu aparelho, como sistema operacional, versao, informacoes de hardware, idioma, sinal de internet e bateria.",
        "Comunicacoes com o site - Quando voce se comunica com o site, coletamos informacoes sobre sua comunicacao, incluindo metadados como data, IP e hora das comunicacoes e todo o seu conteudo.",
        "1.3. Informacoes de outras fontes: Outros usuarios do site podem produzir informacoes sobre voce, como referencias, avaliacoes ou comentarios.",
      ],
    },
    {
      title: "2. Como Usamos suas Informacoes",
      content: [
        "Prezamos muito pela sua privacidade. Todos os dados e informacoes sobre voce sao tratados como confidenciais, e somente os usaremos para os fins aqui descritos e autorizados por voce.",
        "Poderemos utilizar seus dados para: Permitir que voce acesse e utilize todas as funcionalidades do site; Enviar mensagens a respeito de suporte ou servico; Nos comunicar sobre produtos, servicos, promocoes, noticias e atualizacoes; Geracao de leads para promocao das atividades; Cumprir obrigacoes legais.",
        "Exclusao dos dados: Todos os dados coletados serao excluidos de nossos servidores quando voce assim requisitar, por procedimento gratuito e facilitado, ou quando nao forem mais necessarios. Nos casos de solicitacao de exclusao, manteremos os dados por 6 meses para defesa de interesses da Retize ou de terceiros.",
        "O site se reserva no direito de monitorar toda a plataforma para assegurar que as regras descritas nos Termos de Uso estao sendo observadas.",
      ],
    },
    {
      title: "3. Compartilhamento das Informacoes",
      content: [
        "Todos os dados, informacoes e conteudos sobre voce podem ser considerados ativos no caso de negociacoes em que o site fizer parte. Nos reservamos no direito de incluir seus dados dentre os ativos da empresa caso esta venha a ser vendida, adquirida ou fundida com outra.",
        "O site se reserva no direito de fornecer seus dados e informacoes caso seja requisitado judicialmente, ato necessario para conformidade com as leis nacionais, ou caso voce autorize expressamente.",
      ],
    },
    {
      title: "4. Direitos dos Titulares",
      content: [
        "Voce sempre podera optar em nao divulgar seus dados para nos, mas alguns desses dados podem ser necessarios para utilizar as funcionalidades das nossas aplicacoes.",
        "Seus direitos sob a LGPD incluem: Direito de acesso - requisitar e receber copia dos dados pessoais que possuimos; Direito de retificacao - solicitar correcao dos seus dados pessoais; Direito de exclusao - solicitar a exclusao dos dados pessoais; Direito de oposicao ao processamento; Direito de solicitar anonimizacao, bloqueio ou eliminacao; Direito a portabilidade; Direito de retirar o consentimento; Direito a revisao de decisoes automatizadas.",
        "Tentamos responder a todas as solicitacoes legitimas dentro de 5 dias uteis. Para exercer esses direitos, entre em contato pelo email privacidade@retize.com.br.",
      ],
    },
    {
      title: "5. Seguranca das Informacoes",
      content: [
        "Todos os seus dados sao confidenciais e somente as pessoas com as devidas autorizacoes terao acesso a eles. Nossos servidores estao localizados em diferentes locais para garantir estabilidade e seguranca.",
        "Todas as suas informacoes serao, sempre que possivel, criptografadas. A qualquer momento voce podera requisitar copia dos seus dados armazenados em nossos sistemas.",
        "Voce e o unico responsavel por manter sua senha de acesso em local seguro e e vedado o compartilhamento desta com terceiros.",
      ],
    },
    {
      title: "6. Atualizacoes da Politica de Privacidade",
      content: [
        "O site se reserva no direito de alterar essa Politica quantas vezes forem necessarias, visando fornecer a voce mais seguranca, conveniencia e melhorar a sua experiencia.",
        "Caso sejam feitas alteracoes relevantes que ensejem novas autorizacoes suas, publicaremos uma nova politica de privacidade, sujeita novamente ao seu consentimento.",
      ],
    },
    {
      title: "7. Lei Aplicavel",
      content: [
        "Este documento e regido e deve ser interpretado de acordo com as leis da Republica Federativa do Brasil. Fica eleito o Foro da Comarca de Sao Paulo, SP, como o competente para dirimir quaisquer questoes oriundas do presente documento.",
      ],
    },
  ],
  terms: [
    {
      title: "Termos de Uso do www.retize.com.br",
      content: [
        "Esta aplicacao e seu conteudo sao controlados e operados pela propria Retize (RETIZE SPORTS MEDIA NETWORK LTDA). Todos os direitos reservados.",
        "Estes termos de uso tem por objeto definir as regras a serem seguidas para a utilizacao do site www.retize.com.br, sem prejuizo da aplicacao da legislacao vigente.",
        "AO UTILIZAR O SITE, VOCE AUTOMATICAMENTE CONCORDA COM ESTES TERMOS DE USO, RESPONSABILIZANDO-SE INTEGRALMENTE POR TODOS E QUAISQUER ATOS PRATICADOS POR VOCE NO SITE OU EM SERVICOS A ELE RELACIONADOS.",
      ],
    },
    {
      title: "1. O que e o www.retize.com.br?",
      content: [
        "1.1. Servicos: O site www.retize.com.br e um website que nao oferece servicos, prestando-se como canal de comunicacao entre a empresa Retize, seus parceiros, clientes, colaboradores, possiveis colaboradores, sociedade e mercado.",
        "1.2. Suspensao: Nos reservamos o direito de suspender ou cancelar, a qualquer momento, o seu acesso a aplicacao em caso de suspeita de fraude, obtencao de beneficio ou vantagem de forma ilicita, ou pelo nao cumprimento de quaisquer condicoes previstas nestes Termos de Uso.",
      ],
    },
    {
      title: "2. Como acesso o www.retize.com.br?",
      content: [
        "2.1. Acesso: Para acessar o site e utilizar suas funcionalidades nao e necessario efetuar qualquer tipo de cadastro.",
        "2.2. Idade de Utilizacao: Para utilizar o site, voce deve ter pelo menos 18 (dezoito) anos. O site nao coleta intencionalmente quaisquer informacoes ou dados de menores de 18 anos.",
      ],
    },
    {
      title: "3. Quais sao os direitos do www.retize.com.br sobre a aplicacao?",
      content: [
        "3.1. Nossos Direitos: Todos os direitos relativos ao www.retize.com.br e suas funcionalidades sao de propriedade exclusiva do www.retize.com.br, inclusive no que diz respeito aos seus textos, imagens, layouts, software, codigos, bases de dados, graficos, artigos, fotografias e demais conteudos produzidos direta ou indiretamente.",
        "O Conteudo e protegido pela lei de direitos autorais e de propriedade intelectual. E proibido usar, copiar, reproduzir, modificar, traduzir, publicar, transmitir, distribuir, executar, fazer o upload, exibir, licenciar, vender ou explorar e fazer engenharia reversa do Conteudo, para qualquer finalidade, sem consentimento previo e expresso.",
      ],
    },
    {
      title: "4. Propriedade Intelectual sobre o Software e os Materiais Disponibilizados",
      content: [
        "4.1. O www.retize.com.br garante que todos os direitos, titulo e interesse (incluindo direitos autorais, marcarios e outros de propriedade intelectual) sobre o servico disponibilizado permanecerao sob a titularidade do www.retize.com.br.",
        "4.2. O usuario nao adquirira nenhum direito de propriedade sobre os servicos e conteudo, exceto quando haja outorga expressa neste Termos de Uso.",
        "4.3. E proibido que o usuario faca download de nosso conteudo com o intuito de armazena-lo em banco de dados para oferecer para terceiro. Veda-se que o conteudo disponibilizado seja usado para criar uma base de dados ou um servico que possa concorrer de qualquer maneira com o nosso negocio.",
      ],
    },
    {
      title: "5. Reclamacoes sobre Violacao de Direito Autoral",
      content: [
        "5.1. Alegacoes de infringencia de direito autoral de qualquer conteudo disponivel no www.retize.com.br devem ser encaminhadas por meio do email contato@retize.com.br.",
      ],
    },
    {
      title: "6. Responsabilidades do Usuario e do www.retize.com.br",
      content: [
        "6.1. Voce e exclusivamente responsavel pelo uso do www.retize.com.br e devera respeitar as regras destes Termos de Uso, bem como a legislacao aplicavel.",
        "6.2. O www.retize.com.br, seu controlador, suas afiliadas, parceiras ou funcionarios nao serao responsabilizados por danos diretos ou indiretos que resultem de, ou que tenham relacao com o acesso, uso ou a incapacidade de acessar ou utilizar o site.",
        "6.3. O site nao se responsabiliza por interrupcoes ou suspensoes de conexao, transmissoes incompletas ou que falhem, bem como por falha tecnica de qualquer tipo.",
        "6.4. Quando permitido por lei, o www.retize.com.br e os fornecedores ou distribuidores nao serao responsaveis por perda de lucros, perda de receita, perda de dados, perdas financeiras ou por danos indiretos.",
        "6.5. E de sua inteira responsabilidade manter o ambiente de seu dispositivo seguro, com o uso de ferramentas disponiveis como antivirus e firewall.",
        "6.6. O site pode conter links para sites e aplicativos de terceiros. Isso nao implica que o www.retize.com.br endossa, verifica ou garante qualquer ligacao com os proprietarios desses sites.",
      ],
    },
    {
      title: "7. Conteudo do Usuario",
      content: [
        "7.1. O site podera permitir que voce ou qualquer outro usuario apresente, carregue, publique ou disponibilize conteudo ou informacoes de texto, imagem, audio ou video.",
        "7.2. E proibido qualquer conteudo de carater difamatorio, calunioso, injurioso, violento, pornografico, obsceno, ofensivo ou ilicito.",
        "7.3. Qualquer Conteudo de Usuario fornecido por voce permanece de sua propriedade. Contudo, ao fornece-lo voce nos outorga uma licenca em nivel mundial, por prazo indeterminado, gratuita e transferivel.",
        "7.4. O site podera analisar, monitorar e remover Conteudo de Usuario, a criterio exclusivo, a qualquer momento e por qualquer motivo.",
      ],
    },
    {
      title: "8. Disposicoes Gerais",
      content: [
        "8.1. Estes Termos de Uso podem ser alterados a qualquer tempo para refletir ajustes realizados. Sempre que ocorrer qualquer modificacao, voce sera previamente informado.",
        "8.2. Em caso de conflito entre estes termos e os termos modificados, os termos posteriores prevalecerao.",
        "8.3. Estes Termos de Uso sao regidos pelas leis da Republica Federativa do Brasil. Quaisquer duvidas serao solucionadas pelo Foro da Comarca de Sao Paulo, SP.",
        "8.4. Caso tenha alguma duvida, comentario ou sugestao, entre em contato conosco por meio do email contato@retize.com.br.",
        "8.5. Twitch: Ao clicar no botao de extensao da Twitch disponibilizado pela Retize, voce concorda em compartilhar os dados requeridos pela extensao no momento da interacao.",
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
      title: "Politica de Privacidad de www.retize.com.br",
      content: [
        "Cuando utiliza el sitio www.retize.com.br, nos confia sus datos e informacion. Nos comprometemos a mantener esa confianza.",
        "Esta Politica de Privacidad explica de manera clara y accesible como su informacion y datos seran recopilados, utilizados, compartidos y almacenados a traves de nuestros sistemas.",
        "La aceptacion de nuestra Politica se realizara cuando acceda o utilice el sitio, aplicacion o servicios de www.retize.com.br. Esto indicara que esta al tanto y en total acuerdo con la forma en que utilizaremos su informacion y datos.",
      ],
    },
    {
      title: "1. Informacion que Recopilamos",
      content: [
        "1.1. Informacion que nos proporciona: Datos de registro - Cuando se registra en www.retize.com.br, nos proporciona informacion como nombre y correo electronico.",
        "1.2. Informacion generada cuando usa nuestros servicios: Registros de acceso - El sitio recopila automaticamente registros de acceso a la aplicacion, incluyendo direccion IP, fecha y hora. Estos datos son de recopilacion obligatoria segun la Ley 12.965/2014.",
        "Datos de uso - Recopilamos informacion sobre sus interacciones en el sitio, como su navegacion, paginas u otro contenido al que accede, sus busquedas, participacion en encuestas y otras acciones.",
        "Caracteristicas del equipo - Para funcionar, el sitio recopila automaticamente datos sobre las caracteristicas de su dispositivo, como sistema operativo, version, informacion de hardware, idioma, senal de internet y bateria.",
        "Comunicaciones con el sitio - Cuando se comunica con el sitio, recopilamos informacion sobre su comunicacion, incluyendo metadatos como fecha, IP y hora de las comunicaciones y todo su contenido.",
        "1.3. Informacion de otras fuentes: Otros usuarios del sitio pueden producir informacion sobre usted, como referencias, evaluaciones o comentarios.",
      ],
    },
    {
      title: "2. Como Usamos su Informacion",
      content: [
        "Valoramos mucho su privacidad. Todos los datos e informacion sobre usted se tratan como confidenciales y solo los utilizaremos para los fines aqui descritos y autorizados por usted.",
        "Podremos utilizar sus datos para: Permitirle acceder y utilizar todas las funcionalidades del sitio; Enviarle mensajes sobre soporte o servicio; Comunicarnos sobre productos, servicios, promociones, noticias y actualizaciones; Generacion de leads para promocion de actividades; Cumplir obligaciones legales.",
        "Eliminacion de datos: Todos los datos recopilados seran eliminados de nuestros servidores cuando usted lo solicite, mediante procedimiento gratuito y facilitado. En caso de solicitud de eliminacion, mantendremos los datos por 6 meses para defensa de intereses de Retize o terceros.",
        "El sitio se reserva el derecho de monitorear toda la plataforma para asegurar que se observen las reglas descritas en los Terminos de Uso.",
      ],
    },
    {
      title: "3. Compartir Informacion",
      content: [
        "Todos los datos, informacion y contenidos sobre usted pueden considerarse activos en negociaciones en las que participe el sitio. Nos reservamos el derecho de incluir sus datos entre los activos de la empresa en caso de venta, adquisicion o fusion.",
        "El sitio se reserva el derecho de proporcionar sus datos e informacion si se requiere judicialmente, es necesario para el cumplimiento de las leyes nacionales o si usted lo autoriza expresamente.",
      ],
    },
    {
      title: "4. Derechos de los Titulares",
      content: [
        "Siempre podra optar por no divulgar sus datos, pero algunos pueden ser necesarios para utilizar las funcionalidades de nuestras aplicaciones.",
        "Sus derechos bajo la LGPD incluyen: Derecho de acceso; Derecho de rectificacion; Derecho de eliminacion; Derecho de oposicion al procesamiento; Derecho a solicitar anonimizacion, bloqueo o eliminacion; Derecho a la portabilidad; Derecho a retirar el consentimiento; Derecho a revision de decisiones automatizadas.",
        "Intentamos responder a todas las solicitudes legitimas dentro de 5 dias habiles. Para ejercer estos derechos, contactenos en privacidade@retize.com.br.",
      ],
    },
    {
      title: "5. Seguridad de la Informacion",
      content: [
        "Todos sus datos son confidenciales y solo las personas debidamente autorizadas tendran acceso. Nuestros servidores estan ubicados en diferentes lugares para garantizar estabilidad y seguridad.",
        "Toda su informacion sera encriptada siempre que sea posible. En cualquier momento puede solicitar una copia de sus datos almacenados en nuestros sistemas.",
        "Usted es el unico responsable de mantener su contrasena de acceso en un lugar seguro y esta prohibido compartirla con terceros.",
      ],
    },
    {
      title: "6. Actualizaciones de la Politica de Privacidad",
      content: [
        "El sitio se reserva el derecho de modificar esta Politica cuantas veces sea necesario, con el objetivo de brindarle mas seguridad, conveniencia y mejorar su experiencia.",
        "Si se realizan cambios relevantes que requieran nuevas autorizaciones, publicaremos una nueva politica de privacidad, sujeta nuevamente a su consentimiento.",
      ],
    },
    {
      title: "7. Ley Aplicable",
      content: [
        "Este documento se rige e interpreta de acuerdo con las leyes de la Republica Federativa de Brasil. Se elige el Foro de la Comarca de Sao Paulo, SP, como competente para resolver cualquier cuestion derivada de este documento.",
      ],
    },
  ],
  terms: [
    {
      title: "Terminos de Uso de www.retize.com.br",
      content: [
        "Esta aplicacion y su contenido son controlados y operados por Retize (RETIZE SPORTS MEDIA NETWORK LTDA). Todos los derechos reservados.",
        "Estos terminos de uso definen las reglas a seguir para el uso del sitio www.retize.com.br, sin perjuicio de la aplicacion de la legislacion vigente.",
        "AL UTILIZAR EL SITIO, USTED AUTOMATICAMENTE ACEPTA ESTOS TERMINOS DE USO, RESPONSABILIZANDOSE INTEGRALMENTE POR TODOS LOS ACTOS REALIZADOS EN EL SITIO O EN SERVICIOS RELACIONADOS.",
      ],
    },
    {
      title: "1. Que es www.retize.com.br?",
      content: [
        "1.1. Servicios: www.retize.com.br es un sitio web que no ofrece servicios, sirviendo como canal de comunicacion entre la empresa Retize, sus socios, clientes, colaboradores, posibles colaboradores, sociedad y mercado.",
        "1.2. Suspension: Nos reservamos el derecho de suspender o cancelar su acceso a la aplicacion en cualquier momento en caso de sospecha de fraude, obtencion de beneficios de forma ilicita o incumplimiento de las condiciones previstas en estos Terminos de Uso.",
      ],
    },
    {
      title: "2. Como accedo a www.retize.com.br?",
      content: [
        "2.1. Acceso: Para acceder al sitio y utilizar sus funcionalidades no es necesario realizar ningun tipo de registro.",
        "2.2. Edad de uso: Para utilizar el sitio, debe tener al menos 18 (dieciocho) anos. El sitio no recopila intencionalmente informacion o datos de menores de 18 anos.",
      ],
    },
    {
      title: "3. Cuales son los derechos de www.retize.com.br sobre la aplicacion?",
      content: [
        "3.1. Nuestros Derechos: Todos los derechos relativos a www.retize.com.br y sus funcionalidades son propiedad exclusiva de www.retize.com.br, incluyendo textos, imagenes, layouts, software, codigos, bases de datos, graficos, articulos, fotografias y demas contenidos.",
        "El Contenido esta protegido por la ley de derechos de autor y propiedad intelectual. Esta prohibido usar, copiar, reproducir, modificar, traducir, publicar, transmitir, distribuir, ejecutar, cargar, exhibir, licenciar, vender o explotar y realizar ingenieria inversa del Contenido sin consentimiento previo y expreso.",
      ],
    },
    {
      title: "4. Propiedad Intelectual sobre el Software y los Materiales",
      content: [
        "4.1. www.retize.com.br garantiza que todos los derechos, titulo e interes (incluyendo derechos de autor, marcas y otros de propiedad intelectual) sobre el servicio permanecen bajo la titularidad de www.retize.com.br.",
        "4.2. El usuario no adquirira ningun derecho de propiedad sobre los servicios y contenido, excepto cuando haya otorgamiento expreso en estos Terminos de Uso.",
        "4.3. Esta prohibido que el usuario descargue nuestro contenido con la intencion de almacenarlo en una base de datos para ofrecer a terceros. El contenido no puede usarse para crear una base de datos o servicio que pueda competir con nuestro negocio.",
      ],
    },
    {
      title: "5. Reclamaciones sobre Violacion de Derechos de Autor",
      content: [
        "5.1. Las alegaciones de infraccion de derechos de autor de cualquier contenido disponible en www.retize.com.br deben enviarse por correo electronico a contato@retize.com.br.",
      ],
    },
    {
      title: "6. Responsabilidades del Usuario y de www.retize.com.br",
      content: [
        "6.1. Usted es exclusivamente responsable del uso de www.retize.com.br y debera respetar las reglas de estos Terminos de Uso y la legislacion aplicable.",
        "6.2. www.retize.com.br, su controlador, afiliadas, socios o empleados no seran responsables por danos directos o indirectos que resulten del acceso, uso o incapacidad de acceder o utilizar el sitio.",
        "6.3. El sitio no se responsabiliza por interrupciones o suspensiones de conexion, transmisiones incompletas o fallidas, ni por fallas tecnicas de cualquier tipo.",
        "6.4. Cuando lo permita la ley, www.retize.com.br y los proveedores o distribuidores no seran responsables por perdida de ganancias, ingresos, datos, perdidas financieras o danos indirectos.",
        "6.5. Es su entera responsabilidad mantener seguro el entorno de su dispositivo utilizando herramientas disponibles como antivirus y firewall.",
        "6.6. El sitio puede contener enlaces a sitios y aplicaciones de terceros. Esto no implica que www.retize.com.br respalde, verifique o garantice conexion alguna con los propietarios de esos sitios.",
      ],
    },
    {
      title: "7. Contenido del Usuario",
      content: [
        "7.1. El sitio puede permitir que usted u otro usuario presente, cargue, publique o ponga a disposicion contenido o informacion de texto, imagen, audio o video.",
        "7.2. Esta prohibido cualquier contenido de caracter difamatorio, calumnioso, injurioso, violento, pornografico, obsceno, ofensivo o ilicito.",
        "7.3. Cualquier Contenido de Usuario proporcionado por usted permanece de su propiedad. Sin embargo, al proporcionarlo, nos otorga una licencia mundial, indefinida, gratuita y transferible.",
        "7.4. El sitio puede analizar, monitorear y eliminar Contenido de Usuario, a su exclusivo criterio, en cualquier momento y por cualquier motivo.",
      ],
    },
    {
      title: "8. Disposiciones Generales",
      content: [
        "8.1. Estos Terminos de Uso pueden modificarse en cualquier momento para reflejar ajustes realizados. Siempre que ocurra cualquier modificacion, sera previamente informado.",
        "8.2. En caso de conflicto entre estos terminos y los terminos modificados, prevaleceran los terminos posteriores.",
        "8.3. Estos Terminos de Uso se rigen por las leyes de la Republica Federativa de Brasil. Cualquier duda sera resuelta por el Foro de la Comarca de Sao Paulo, SP.",
        "8.4. Si tiene alguna duda, comentario o sugerencia, contactenos por correo electronico a contato@retize.com.br.",
        "8.5. Twitch: Al hacer clic en el boton de extension de Twitch proporcionado por Retize, acepta compartir los datos requeridos por la extension en el momento de la interaccion.",
      ],
    },
  ],
}

export const legalContent: Record<Locale, LegalContent> = {
  "pt-BR": ptBR,
  en,
  es,
}
