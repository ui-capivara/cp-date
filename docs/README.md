# Introdução

O cp-date é um componente para seleção de data e/ou hora.

------
# Instalação

## # CDN
Recomendamos vincular a um número de versão específico que você possa atualizar manualmente, porém no exemplo iremos utilizar a ultima versão disponível.
```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/cp-date@latest/dist/cp-date.css">

<!-- Component -->
<script src="https://unpkg.com/cp-date@latest/dist/cp-date.js"></script>
```
Certifique-se de ler sobre as diferentes construções e use a produção, substituindo os arquivos .js por .min.js. Esta é uma compilação otimizada para velocidade em vez de experiência de desenvolvimento.

## # NPM
O NPM é o método de instalação recomendado ao criar aplicativos de grande escala. Ele combina muito bem com bundlers de módulo, como Webpack ou Browserify.

```shell
$ npm install cp-date --save
```
Após a instalação, precisamos importar o componente no projeto, o componente é feito utilizando **typescript** então é necessário configurar o **ts-loader** no arquivo do configuração do seu **webpack**. Exemplo:
```javascript
module.exports = {
  ...
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
```
Com o **ts-loader** configurado, basta importarmos o componente no arquivo principal do seu projeto. Exemplo:
```javascript
import 'cp-date';
```

------
# Instância do componente

Se chegamos até aqui, provavelmente a instalação foi finalizada êxito, isso significa que já podemos utilizar o cp-date.
Vamos agora criar uma nova instância do componente, primeiro faça a declaração no HTML dando um **alias** para essa instância no exemplo usaremos o alias **dateComponent**.

Você pode ver esse exemplo no [Jsfiddle](https://jsfiddle.net/dsd46pq6/3/)

```html
<cp-date #exampleCrop></cp-date>
```

Depois de declarar o componente no HTML precisamos inicializa-lo, nesse momento é possível passar alguns parâmetros caso julgarmos necessário.
Na inicialização do componente, precisar informar o contexto que será aplicado o valor. Exemplo:
```javascript
let pessoa = { name: "Caio" };

capivara.componentBuilder('dateComponent')
        .context(pessoa)
        .bindings({
            cpModel: 'birthday'
        })
        .build();
```
------
# Configuração

O componente aceita algumas constantes que permitem configurar funcionalidades. No exemplo abaixo iremos selecionar um intervalo de datas que podem ser selecionadas, que serão entre **11/04/2018** até **15/04/2018**, podendo escolher apenas a data, e escolhendo a mascara do input como **'dd/mm/YYYY'**.

Você pode ver esse exemplo no [Jsfiddle](https://jsfiddle.net/dsd46pq6/6/)

```javascript
let pessoa = { name: 'Caio' };

const config = {
	timepicker: false,
    minDate: '2018/04/11',
    maxDate: '2018/04/15',
    format: 'd/m/Y'
}

capivara.componentBuilder('dateComponent')
        .context(pessoa)
        .bindings({
        	cpModel: 'birthday'
      	})
        .constants(config)
        .build();
```

## Objeto de config
| Atributo| Valor Default      | Tipo          | Descrição |
| ---------------- |:----------------:| -------:|---------:|
| datepicker | true | boolean | Configuração responsável por ativar a seleção de data |
| timepicker | true | boolean | Configuração responsável por ativar a seleção de hora |
| mask | true | boolean/string | Configuração responsável por ativar a máscara do input. Também é possível colocar máscaras customizadas, como **__:__** ou **d/m/Y**|

## CropConfig

Veja esse exemplo no [Jsfiddle](https://jsfiddle.net/xfnkp3no/9/) que demostramos como deixar o resize livre e o zoom infinito.

| Atributo: Default      | Tipo          | Descrição |
| ------------- |:-------------:| -----:|
| customClass: ''   | string | Uma classe de sua escolha para adicionar ao contêiner para adicionar estilos personalizados. |
| enableOrientation: false      | boolean | Ativar ou desativar o suporte a orientação personalizada.  |
| enableResize: false      | boolean | Ativar ou desativar o suporte para redimensionar a área da janela de visualização. |
| enableZoom: true      | boolean | Ative a funcionalidade de zoom. Se definido como falso, a rolagem não aumentariam. |
| enforceBoundary: true      | boolean | Restringe o zoom, de modo que a imagem não pode ser menor que a viewport. |
| showZoomer: true      | boolean | Ocultar ou Mostrar o controle deslizante de zoom. |
| viewport: object      | ViewPortConfig | Configuração da parte visível da imagem. |

## ViewPortConfig
| Atributo: Default      | Tipo          | Descrição |
| ------------- |:-------------:| -----:|
| width: 170px      | string | Define a largura da área de recorte. |
| height: 170px      | string | Define a altura da área de recorte. |
| type: square/circle      | string | Define a a imagem será recortada em circulo ou quadrado. |

## DriveConfig
| Atributo      | Tipo          | Descrição |
| ------------- |:-------------:| -----:|
| apiKey      | string | Define a chave da api do google. |
| clientId      | string | Define o id do cliente google. |

------
# Integração com google drive

Você pode permitir que seu usuário sincronize as imagens do google drive com o componente, permitindo que ele faça troca das imagens com mais praticidade. Caso você queira utilizar essa funcionalidade, siga as instruções abaixo: 

* 1 - Acesse [Google console](https://console.developers.google.com/apis/api/drive.googleapis.com?project=_) e selecione ou crie seu projeto. 
* 2 - Após selecionar seu projeto, clique em Ativar na tela de consentimento. 
* 3 - Com o serviço Google Drive API ativo, vá até a guia Credenciais e crie uma credencial do tipo **Chave de API** e **ID do cliente OAuth**. 

Obs: Quando estiver criando o **ID do cliente OAuth** certifique-se de colocar as URL de origens permitidas.

Veja no [Jsfiddle](https://jsfiddle.net/xfnkp3no/10/) como informar suas chaves.