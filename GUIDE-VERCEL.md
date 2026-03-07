# 🚀 DEPLOY NO VERCEL - GUIA COMPLETO

O Vercel é mais simples que GitHub Pages e funciona quase sempre!

---

## OPÇÃO 1: Deploy via GitHub (Recomendado)

### Passo 1: Criar conta no Vercel

1. Acesse: https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel

### Passo 2: Importar o repositório

1. No Vercel, clique em **"Add New..."** → **"Project"**
2. Procure pelo seu repositório: `MEU-REPOSIT-RIO-`
3. Clique em **"Import"**

### Passo 3: Configurar

1. **Framework Preset:** Deixa como está (ou selecione "Other")
2. **Build Command:** Deixa vazio ou-put `npm run build`
3. **Output Directory:** Deixa `.` ou `/`
4. Clique em **"Deploy"**

### Passo 4: Pronto!

Após 1-2 minutos, você receberá uma URL como:
```
https://meu-portfolio.vercel.app
```

---

## OPÇÃO 2: Deploy via CLI (Linha de Comando)

### Pré-requisitos
Ter o Node.js instalado no computador.

### Passo 1: Instalar o Vercel CLI

```bash
npm i -g vercel
```

### Passo 2: Fazer login

```bash
vercel login
```

### Passo 3: Deploy

```bash
# Na pasta do seu projeto:
vercel
```

Siga as instruções:
- Set up and deploy? **Y**
- Which scope? **(seu username)**
- Link to existing project? **N**
- What's your project's name? **meu-portfolio**
- In which directory is your code? **(deixe vazio, aperte Enter)**
- Want to modify settings? **N**

### Passo 4: Pronto!

Você receberá uma URL como:
```
https://meu-portfolio.vercel.app
```

---

## OPÇÃO 3: Deploy via Drag and Drop (Mais Fácil!)

### Passo 1: Acesse o Vercel

1. Vá em: https://vercel.com/drop
2. Você verá uma área para arrastar arquivos

### Passo 2: Prepare seus arquivos

1. Crie uma pasta chamada `deploy`
2. Copie estes arquivos para dentro:
   - index.html
   - style.css
   - script.js
   - TODO.md
   - README.md

### Passo 3: Arraste para o Vercel

1. Arraste a pasta `deploy` para a área do Vercel
2. Aguarde o upload
3. Pronto!

### Passo 4: Customize (opcional)

1. Clique em **"Edit"** para mudar o nome do projeto
2. O domínio será algo como: `meu-portfolio.vercel.app`

---

## 📝 ATUALIZAR O DEPLOY

### Se usou a opção 1 (GitHub):
É só fazer `git push` e o Vercel atualiza automaticamente!

```bash
git add .
git commit -m "Atualização"
git push origin main
```

### Se usou a opção 2 (CLI):
```bash
vercel --prod
```

---

## 🔗 PRONTO!

A URL do seu portfólio será algo como:
```
https://eliane-lunguinho-portfolio.vercel.app
```

Você pode customizar o domínio depois nas configurações do Vercel.

---

## ❓ Precisa de ajuda?

O método mais fácil é a **OPÇÃO 3 (Drag and Drop)** - não precisa de Git ou CLI!

