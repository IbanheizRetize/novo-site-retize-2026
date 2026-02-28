# Retize - Website Institucional 2026

Website institucional da Retize desenvolvido com Next.js 16, focado em atrair organizações esportivas e marcas anunciantes através de uma experiência moderna e multilíngue.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 16.1.6 (App Router)
- **React:** 19.2.4
- **TypeScript:** 5.7.3
- **Estilização:** Tailwind CSS 4.1.9
- **UI Components:** Radix UI + shadcn/ui
- **Package Manager:** pnpm
- **Analytics:** Vercel Analytics + Google Analytics 4 (GA4)
- **Gerenciamento de Formulários:** react-hook-form + zod
- **Ícones:** Lucide React
- **Carousel:** Embla Carousel

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start

# Executar linter
pnpm lint
```

O servidor de desenvolvimento estará disponível em [http://localhost:3000](http://localhost:3000).

## 📁 Estrutura do Projeto

```
novo-site-retize-2026/
├── app/                              # Páginas e rotas (App Router)
│   ├── page.tsx                      # Página inicial (/)
│   ├── layout.tsx                    # Layout raiz com providers
│   ├── globals.css                   # Estilos globais
│   ├── organizacoes-esportivas/      # Página para organizações
│   │   └── page.tsx
│   └── marcas-anunciantes/           # Página para marcas (em desenvolvimento)
│       └── page.tsx
│
├── components/                       # Componentes React
│   ├── header.tsx                    # Cabeçalho principal
│   ├── hero-video.tsx                # Seção hero com vídeo
│   ├── platform-section.tsx          # Seção da plataforma
│   ├── journey-section.tsx           # Jornada em 4 etapas
│   ├── clients-section.tsx           # Logos de clientes
│   ├── value-proof-section.tsx       # Métricas com animação
│   ├── contact-section.tsx           # Formulário de contato
│   ├── site-footer.tsx               # Rodapé principal
│   ├── language-selector.tsx         # Seletor de idiomas
│   ├── org/                          # Componentes específicos para orgs
│   │   ├── org-header.tsx
│   │   ├── org-hero.tsx
│   │   ├── revenue-lever-section.tsx
│   │   ├── platform-demo-section.tsx
│   │   ├── cases-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── partners-section.tsx
│   │   └── org-footer.tsx
│   └── ui/                           # Componentes base (shadcn/ui)
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── sheet.tsx                 # Menu mobile
│       ├── dialog.tsx
│       └── ...
│
├── hooks/                            # React Hooks customizados
│   ├── use-mobile.ts                 # Detecção de breakpoint mobile
│   └── use-toast.ts                  # Sistema de notificações
│
├── lib/                              # Utilitários e bibliotecas
│   ├── utils.ts                      # Função cn() para merge de classes
│   └── i18n/                         # Sistema de internacionalização
│       ├── context.tsx               # Provider e hook useI18n()
│       └── dictionaries.ts           # Traduções (pt-BR, en, es)
│
├── public/                           # Assets estáticos
│   ├── brand/                        # Logos e identidade visual
│   ├── logos/                        # Logos de clientes/parceiros
│   ├── images/                       # Imagens gerais
│   └── prints/                       # Screenshots
│
└── scripts/                          # Scripts utilitários
    └── cleanup-zone-ids.js           # Remove arquivos Zone.Identifier
```

## 🌍 Internacionalização (i18n)

O site suporta 3 idiomas:
- **Português (pt-BR)** - Idioma padrão
- **Inglês (en)**
- **Espanhol (es)**

### Como funciona

O sistema de i18n é implementado no lado do cliente usando Context API:

```tsx
import { useI18n } from '@/lib/i18n/context'

export function MeuComponente() {
  const { t, locale, setLocale } = useI18n()
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  )
}
```

**Recursos:**
- Mudança de idioma em tempo real sem reload
- Persistência via localStorage
- Sincronização com URL param `?lang=en`
- Fallback automático para pt-BR
- Seletor visual com bandeiras no header

As traduções são gerenciadas em [lib/i18n/dictionaries.ts](lib/i18n/dictionaries.ts) (~718 chaves de tradução).

## 🎨 Estilização

### Tailwind CSS

Configuração customizada com cores da marca Retize:
- **Primary:** `#4700d1` (roxo)
- **Accent:** `#00CCFF` (ciano), `#FF0066` (rosa), `#FF6600` (laranja)

### Utilitário cn()

Para merge otimizado de classes CSS:

```tsx
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  props.className
)} />
```

Combina `clsx` + `tailwind-merge` para evitar conflitos de classes Tailwind.

## 📄 Páginas Implementadas

### ✅ Página Inicial (/)
- Hero com vídeo background adaptativo
- Seção da plataforma (carousel de features)
- Jornada do cliente (4 etapas)
- Logos de clientes/parceiros
- Prova de valor (métricas animadas)
- Formulário de contato
- Footer completo

### ✅ Organizações Esportivas (/organizacoes-esportivas)
- Hero específico para orgs
- Alavancas de receita
- Demo da plataforma
- Casos de sucesso
- Depoimentos
- Parceiros estratégicos
- Footer dedicado

### 🔨 Marcas Anunciantes (/marcas-anunciantes)
- **Status:** Em desenvolvimento
- Atualmente contém apenas título placeholder

## � Google Analytics 4

**Measurement ID:** `G-8NX7K07YH0`

A coleta é inicializada via `next/script` (strategy `afterInteractive`) no [app/layout.tsx](app/layout.tsx), garantindo que o script carregue em todas as páginas sem bloquear a renderização. A função auxiliar tipada em [lib/gtag.ts](lib/gtag.ts) centraliza todos os eventos.

### Pageviews

Pageviews são coletados **automaticamente** pela chamada `gtag('config', 'G-8NX7K07YH0')` presente no layout raiz. Qualquer navegação entre rotas do App Router dispara um novo `page_view` sem código adicional.

| Página | Rota |
|--------|------|
| Home | `/` |
| Organizações Esportivas | `/organizacoes-esportivas` |
| Marcas Anunciantes | `/marcas-anunciantes` |
| Legal | `/legal` |

### Eventos Personalizados

#### `contact_form_submit` — Envio do formulário de contato

| Parâmetro | Tipo | Valor | Arquivo |
|-----------|------|-------|---------|
| `form_id` | string | `"contact_main"` | [contact-section.tsx](components/contact-section.tsx) |

Disparado após sucesso na requisição `POST /api/contact`.

---

#### `generate_lead` — Captura de lead via modal de PDF

| Parâmetro | Tipo | Exemplo de valor | Arquivo |
|-----------|------|------------------|---------|
| `form_id` | string | `"pacotes-patrocinio"` / `"copa-2026"` | [activation-section.tsx](components/brands/activation-section.tsx) |

Disparado após sucesso na requisição `POST /api/leads/copa-2026`. O campo `form_id` corresponde ao parâmetro `source` enviado pelo formulário.

---

#### `file_download` — Download de PDF após lead

| Parâmetro | Tipo | Exemplo de valor | Arquivo |
|-----------|------|------------------|---------|
| `file_name` | string | URL do PDF no GCS | [activation-section.tsx](components/brands/activation-section.tsx) |
| `link_text` | string | Título do modal | [activation-section.tsx](components/brands/activation-section.tsx) |

Disparado junto com `generate_lead`, no momento em que o PDF é aberto via `window.open()`.

---

#### `cta_click` — Clique em botões de CTA internos

| Parâmetro | Tipo | Valores possíveis | Arquivo |
|-----------|------|-------------------|---------|
| `cta_id` | string | `"hero_orgs"` \| `"hero_brands"` \| `"header_contact"` \| `"header_contact_mobile"` | [hero-video.tsx](components/hero-video.tsx), [header.tsx](components/header.tsx) |
| `cta_text` | string | Texto traduzido do botão | idem |

---

#### `external_link_click` — Clique em links externos

| Parâmetro | Tipo | Descrição | Arquivos |
|-----------|------|-----------|----------|
| `link_url` | string | URL completa do destino | vários |
| `link_text` | string | Rótulo legível do link | vários |

Links rastreados:

| `link_text` | Destino |
|-------------|--------|
| `WhatsApp - Header desktop/mobile` | `https://wa.me/5511930601050` | Headers org e brands |
| `WhatsApp - Tech Section desktop/mobile` | `https://wa.me/5511930601050` | [tech-section.tsx](components/brands/tech-section.tsx) |
| `WhatsApp - Platform Demo CTA` | `https://wa.me/5511930601050` | [platform-demo-section.tsx](components/org/platform-demo-section.tsx) |
| `WhatsApp - Revenue Levers CTA` | `https://wa.me/5511930601050` | [revenue-lever-section.tsx](components/org/revenue-lever-section.tsx) |
| `WhatsApp - Testimonials CTA` | `https://wa.me/5511930601050` | [testimonials-section.tsx](components/org/testimonials-section.tsx) |
| `WhatsApp - Brands Partners CTA` | `https://wa.me/5511930601050` | [brands-partners-section.tsx](components/brands/brands-partners-section.tsx) |
| `WhatsApp - Org Partners CTA` | `https://wa.me/5511930601050` | [partners-section.tsx](components/org/partners-section.tsx) |
| `WhatsApp` | `https://wa.me/5511930601050` | Footers org e brands |
| `Calendly - Agendar reuniao` | `https://calendly.com/nicolas-ibanheiz/retize-ads` | [contact-section.tsx](components/contact-section.tsx) |
| `Instagram` / `LinkedIn` / `Linktree` | URLs das redes sociais | Footers org e brands |
| `Portal de Privacidade` | `https://www.privacidade.com.br/...` | Footers org e brands |

---

#### `video_start` — Início de reprodução de vídeo

| Parâmetro | Tipo | Valores possíveis | Arquivo |
|-----------|------|-------------------|---------|
| `video_id` | string | veja tabela abaixo | vários |

| `video_id` | Descrição | Arquivo |
|------------|-----------|--------|
| `hero_background` | Vídeo de fundo do hero (autoplay) | [hero-video.tsx](components/hero-video.tsx) |
| `platform_demo_analytics` | Demo do módulo Analytics | [platform-demo-section.tsx](components/org/platform-demo-section.tsx) |
| `platform_demo_survey` | Demo do módulo Survey | idem |
| `platform_demo_track` | Demo do módulo Track | idem |
| `platform_demo_cdp` | Demo do módulo CDP | idem |
| `platform_demo_ads` | Demo do módulo Ads | idem |
| `platform_demo_crm` | Demo do módulo CRM | idem |
| `testimonial_debora` | Depoimento Débora | [testimonials-section.tsx](components/org/testimonials-section.tsx) |
| `testimonial_ricardo` | Depoimento Ricardo | idem |
| `testimonial_erich` | Depoimento Erich | idem |
| `testimonial_daniel` | Depoimento Daniel | idem |
| `testimonial_brands_ricardo` | Depoimento Ricardo (página brands) | [brands-cases-section.tsx](components/brands/brands-cases-section.tsx) |

---

#### `carousel_navigate` — Navegação em carrosséis

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `carousel_id` | string | Identificador do carrossel (veja tabela abaixo) |
| `slide_index` | number | Índice do slide de destino (0-based) |
| `direction` | string | `"prev"` \| `"next"` \| `"dot"` \| `"swipe_prev"` \| `"swipe_next"` |

| `carousel_id` | Seção | Arquivo |
|---------------|-------|---------|
| `platform` | Carousel da plataforma (home) | [platform-section.tsx](components/platform-section.tsx) |
| `tech` | Carousel de tecnologia (brands) | [tech-section.tsx](components/brands/tech-section.tsx) |
| `platform_demo` | Seletor de módulos da plataforma | [platform-demo-section.tsx](components/org/platform-demo-section.tsx) |
| `cases_org` | Carousel de cases (orgs, mobile) | [cases-section.tsx](components/org/cases-section.tsx) |
| `cases_brands` | Carousel de cases (brands, mobile) | [brands-cases-section.tsx](components/brands/brands-cases-section.tsx) |
| `testimonials` | Carousel de depoimentos (desktop) | [testimonials-section.tsx](components/org/testimonials-section.tsx) |
| `testimonials_mobile` | Carousel de depoimentos (mobile) | idem |
| `testimonials_brands` | Carousel de depoimentos brands (mobile) | [brands-cases-section.tsx](components/brands/brands-cases-section.tsx) |

---

#### `language_change` — Troca de idioma

| Parâmetro | Tipo | Valores possíveis | Arquivo |
|-----------|------|-------------------|---------|
| `from_locale` | string | `"pt-BR"` \| `"en"` \| `"es"` | [language-selector.tsx](components/language-selector.tsx) |
| `to_locale` | string | `"pt-BR"` \| `"en"` \| `"es"` | idem |

---

### Utilitário `lib/gtag.ts`

```ts
import { trackContactFormSubmit } from '@/lib/gtag'

// Disparar evento
trackContactFormSubmit({ form_id: 'contact_main' })
```

Funções exportadas: `event`, `trackContactFormSubmit`, `trackGenerateLead`, `trackFileDownload`, `trackExternalLinkClick`, `trackVideoPlay`, `trackCarouselNavigate`, `trackLanguageChange`, `trackCtaClick`.

A função base `event()` é segura para SSR — retorna sem erro se `window.gtag` não estiver disponível.
## 📈 Google Analytics 4

**Measurement ID:** `G-8NX7K07YH0`

A coleta é inicializada via `next/script` (strategy `afterInteractive`) no [app/layout.tsx](app/layout.tsx), garantindo que o script carregue em todas as páginas sem bloquear a renderização. A função auxiliar tipada em [lib/gtag.ts](lib/gtag.ts) centraliza todos os eventos.

### Pageviews

Pageviews são coletados **automaticamente** pela chamada `gtag('config', 'G-8NX7K07YH0')` presente no layout raiz. Qualquer navegação entre rotas do App Router dispara um novo `page_view` sem código adicional.

| Página | Rota |
|--------|------|
| Home | `/` |
| Organizações Esportivas | `/organizacoes-esportivas` |
| Marcas Anunciantes | `/marcas-anunciantes` |
| Legal | `/legal` |

### Eventos Personalizados

#### `contact_form_submit` — Envio do formulário de contato

| Parâmetro | Tipo | Valor | Arquivo |
|-----------|------|-------|---------|
| `form_id` | string | `"contact_main"` | [contact-section.tsx](components/contact-section.tsx) |

Disparado após sucesso na requisição `POST /api/contact`.

---

#### `generate_lead` — Captura de lead via modal de PDF

| Parâmetro | Tipo | Exemplo de valor | Arquivo |
|-----------|------|------------------|---------|
| `form_id` | string | `"pacotes-patrocinio"` / `"copa-2026"` | [activation-section.tsx](components/brands/activation-section.tsx) |

Disparado após sucesso na requisição `POST /api/leads/copa-2026`. O campo `form_id` corresponde ao parâmetro `source` enviado pelo formulário.

---

#### `file_download` — Download de PDF após lead

| Parâmetro | Tipo | Exemplo de valor | Arquivo |
|-----------|------|------------------|---------|
| `file_name` | string | URL do PDF no GCS | [activation-section.tsx](components/brands/activation-section.tsx) |
| `link_text` | string | Título do modal | [activation-section.tsx](components/brands/activation-section.tsx) |

Disparado junto com `generate_lead`, no momento em que o PDF é aberto via `window.open()`.

---

#### `cta_click` — Clique em botões de CTA internos

| Parâmetro | Tipo | Valores possíveis | Arquivo |
|-----------|------|-------------------|---------|
| `cta_id` | string | `"hero_orgs"` \| `"hero_brands"` \| `"header_contact"` \| `"header_contact_mobile"` | [hero-video.tsx](components/hero-video.tsx), [header.tsx](components/header.tsx) |
| `cta_text` | string | Texto traduzido do botão | idem |

---

#### `external_link_click` — Clique em links externos

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `link_url` | string | URL completa do destino |
| `link_text` | string | Rótulo legível do link |

Links rastreados:

| `link_text` | Destino | Arquivo |
|-------------|---------|---------|
| `WhatsApp - Header desktop/mobile` | `https://wa.me/5511930601050` | [brands-header.tsx](components/brands/brands-header.tsx), [org-header.tsx](components/org/org-header.tsx) |
| `WhatsApp - Tech Section desktop/mobile` | `https://wa.me/5511930601050` | [tech-section.tsx](components/brands/tech-section.tsx) |
| `WhatsApp - Platform Demo CTA` | `https://wa.me/5511930601050` | [platform-demo-section.tsx](components/org/platform-demo-section.tsx) |
| `WhatsApp - Revenue Levers CTA` | `https://wa.me/5511930601050` | [revenue-lever-section.tsx](components/org/revenue-lever-section.tsx) |
| `WhatsApp - Testimonials CTA` | `https://wa.me/5511930601050` | [testimonials-section.tsx](components/org/testimonials-section.tsx) |
| `WhatsApp - Brands Partners CTA` | `https://wa.me/5511930601050` | [brands-partners-section.tsx](components/brands/brands-partners-section.tsx) |
| `WhatsApp - Org Partners CTA` | `https://wa.me/5511930601050` | [partners-section.tsx](components/org/partners-section.tsx) |
| `WhatsApp` | `https://wa.me/5511930601050` | Footers org e brands |
| `Calendly - Agendar reuniao` | `https://calendly.com/nicolas-ibanheiz/retize-ads` | [contact-section.tsx](components/contact-section.tsx) |
| `Instagram` / `LinkedIn` / `Linktree` | URLs das redes sociais | Footers org e brands |
| `Portal de Privacidade` | `https://www.privacidade.com.br/...` | Footers org e brands |

---

#### `video_start` — Início de reprodução de vídeo

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `video_id` | string | Identificador único do vídeo (veja tabela abaixo) |

| `video_id` | Descrição | Arquivo |
|------------|-----------|---------|
| `hero_background` | Vídeo de fundo do hero (autoplay) | [hero-video.tsx](components/hero-video.tsx) |
| `platform_demo_analytics` | Demo do módulo Analytics | [platform-demo-section.tsx](components/org/platform-demo-section.tsx) |
| `platform_demo_survey` | Demo do módulo Survey | idem |
| `platform_demo_track` | Demo do módulo Track | idem |
| `platform_demo_cdp` | Demo do módulo CDP | idem |
| `platform_demo_ads` | Demo do módulo Ads | idem |
| `platform_demo_crm` | Demo do módulo CRM | idem |
| `testimonial_debora` | Depoimento Débora | [testimonials-section.tsx](components/org/testimonials-section.tsx) |
| `testimonial_ricardo` | Depoimento Ricardo | idem |
| `testimonial_erich` | Depoimento Erich | idem |
| `testimonial_daniel` | Depoimento Daniel | idem |
| `testimonial_brands_ricardo` | Depoimento Ricardo (página brands) | [brands-cases-section.tsx](components/brands/brands-cases-section.tsx) |

---

#### `carousel_navigate` — Navegação em carrosseis

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `carousel_id` | string | Identificador do carrossel (veja tabela abaixo) |
| `slide_index` | number | Índice do slide de destino (0-based) |
| `direction` | string | `"prev"` \| `"next"` \| `"dot"` \| `"swipe_prev"` \| `"swipe_next"` |

| `carousel_id` | Seção | Arquivo |
|---------------|-------|---------|
| `platform` | Carousel da plataforma (home) | [platform-section.tsx](components/platform-section.tsx) |
| `tech` | Carousel de tecnologia (brands) | [tech-section.tsx](components/brands/tech-section.tsx) |
| `platform_demo` | Seletor de módulos da plataforma | [platform-demo-section.tsx](components/org/platform-demo-section.tsx) |
| `cases_org` | Carousel de cases (orgs, mobile) | [cases-section.tsx](components/org/cases-section.tsx) |
| `cases_brands` | Carousel de cases (brands, mobile) | [brands-cases-section.tsx](components/brands/brands-cases-section.tsx) |
| `testimonials` | Carousel de depoimentos (desktop) | [testimonials-section.tsx](components/org/testimonials-section.tsx) |
| `testimonials_mobile` | Carousel de depoimentos (mobile) | idem |
| `testimonials_brands` | Carousel de depoimentos brands (mobile) | [brands-cases-section.tsx](components/brands/brands-cases-section.tsx) |

---

#### `language_change` — Troca de idioma

| Parâmetro | Tipo | Valores possíveis | Arquivo |
|-----------|------|-------------------|---------|
| `from_locale` | string | `"pt-BR"` \| `"en"` \| `"es"` | [language-selector.tsx](components/language-selector.tsx) |
| `to_locale` | string | `"pt-BR"` \| `"en"` \| `"es"` | idem |

---

### Utilitário `lib/gtag.ts`

```ts
import { trackContactFormSubmit } from '@/lib/gtag'

// Disparar evento
trackContactFormSubmit({ form_id: 'contact_main' })
```

Funções exportadas: `event`, `trackContactFormSubmit`, `trackGenerateLead`, `trackFileDownload`, `trackExternalLinkClick`, `trackVideoPlay`, `trackCarouselNavigate`, `trackLanguageChange`, `trackCtaClick`.

A função base `event()` é segura para SSR — retorna sem erro se `window.gtag` não estiver disponível.
## �🛠️ Convenções de Desenvolvimento

### Imports

Use sempre o alias `@/` para imports internos:

```tsx
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'
```

### Componentes Interativos

Adicione `"use client"` no topo de componentes que usam hooks ou eventos:

```tsx
"use client"

import { useState } from 'react'

export function MeuComponente() {
  const [state, setState] = useState(false)
  // ...
}
```

### Nomenclatura

- **Componentes:** PascalCase (`HeroVideo`, `ContactSection`)
- **Funções:** camelCase (`handleSubmit`, `formatDate`)
- **Arquivos:** kebab-case para componentes (`hero-video.tsx`), camelCase para utils

### Assets

Organize arquivos em public/ por categoria:
- `public/brand/` - Logos e marca Retize
- `public/logos/` - Logos de clientes/parceiros
- `public/images/` - Imagens gerais do site
- `public/prints/` - Screenshots de produtos

## 📊 Status do Projeto

### Features Implementadas ✅
- ✅ Sistema de internacionalização completo (3 idiomas)
- ✅ Navegação responsiva com menu mobile (Sheet)
- ✅ Formulário de contato com validação
- ✅ Hero com vídeo adaptativo (desktop/mobile)
- ✅ Carousel de features da plataforma
- ✅ Animações de scroll e números
- ✅ Página completa de organizações esportivas
- ✅ SEO básico e meta tags
- ✅ Analytics (Vercel + GA4)

### Em Desenvolvimento 🔨
- 🔨 Página de marcas anunciantes (placeholder)
- 🔨 Backend para formulário de contato (atualmente mock)
- 🔨 Sistema de dark mode (ThemeProvider configurado mas não ativado)

### Próximos Passos 📋
- Completar página de marcas anunciantes
- Implementar backend real para forms
- Adicionar páginas de loading e erro (loading.tsx, error.tsx)
- Ativar dark mode (ThemeProvider presente mas não usado no layout)
- Otimizar imagens (Next.js image optimization desabilitado)
- Adicionar testes unitários

## 🔍 Otimizações Recentes

Este projeto passou por uma auditoria de código e remoção de componentes não utilizados. Para mais detalhes, veja [ANALISE-CODIGO-NAO-UTILIZADO.md](ANALISE-CODIGO-NAO-UTILIZADO.md).

**Melhorias aplicadas:**
- Remoção de ~40 componentes UI não utilizados
- Eliminação de hooks duplicados
- Limpeza de arquivos Zone.Identifier
- Redução estimada de ~200KB+ no bundle

## 🤝 Contribuindo

### Setup do Ambiente

1. Clone o repositório
2. Instale o pnpm: `npm install -g pnpm`
3. Instale as dependências: `pnpm install`
4. Inicie o servidor: `pnpm dev`

### Guidelines

- Sempre use TypeScript com tipagem adequada
- Adicione traduções para os 3 idiomas ao criar novos textos
- Teste em mobile e desktop
- Use o utilitário `cn()` para classes condicionais
- Prefira composição de componentes a props complexas
- Mantenha componentes pequenos e focados

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile:** < 768px (menu drawer, layouts em coluna)
- **Tablet:** 768px - 1024px (md breakpoint)
- **Desktop:** > 1024px (lg breakpoint)

## 📞 Suporte

Para dúvidas sobre o desenvolvimento do projeto, consulte:
- Documentação do Next.js: https://nextjs.org/docs
- Documentação do Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui Components: https://ui.shadcn.com

---

**Desenvolvido com ❤️ para Retize**
