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
| ---------------- |----------------:| -------:|---------:|
| language | 'pt-BR' | string | Configuração que define a linguagem do calendário. O padrão para utilização são as iniciais da língua|
| datepicker | true | boolean | Configuração responsável por ativar a seleção de data |
| timepicker | true | boolean | Configuração responsável por ativar a seleção de hora |
| mask | true | boolean/string | Configuração responsável por ativar a máscara do input. Também é possível colocar máscaras customizadas, como **'\__:\__'** ou **'d/m/Y'** |
| format | 'd/m/Y H:i' | string | Configuração responsável por atribuir o formato da data que será exibida na input|
| openCalendar | true | boolean | Configuração responsável por fazer com que o calendário fique aberto todo o tempo |
| allowedTimes | [] | string array | Configuração responsável por selecionar horários disponíveis a serem selecionados, como por exemplo ['12:00', '13:00'], que permitiria somente selecionar as 12:00 e as 13:00 horas |
| defaultTime | false | boolean/string | Configuração responsável por selecionar a hora padrão, para quando o componente inicializar, ele já vir selecionado esta hora. Exemplo da utilização: '13:00' |
| defaultDate | false | boolean/string | Configuração responsável por selecionar uma data padrão, para quando o componente inicializar, ele já vir selecionado esta hora. Exemplo da utilização: '10/12/1993' |
| step | 60 | number | Configuração responsável por atribuir a cada quantos minutos o componente disponibilizará para ser selecionado na parte visual do componente|
| weekNumbers | true | boolean | Configuração responsável por apresentar os dias da semana do ano no calendário |
| yearStart | 1950 | number | Configuração responsável por atribuir o ano mínimo selecionável no calendário | 
| yearEnd | 2050 | number | Configuração responsável por atribuir o ano máximo selecionável no calendário |
| dayOfWeekStart | 0 | number | Configuração responsável por selecionar o primeiro dia da semana do calendário |
| disabledDates | [] | string array | Configuração responsável por disabilitar algumas datas de serem selecionadas. Exemplo de utilização: ['2018/04/12','2018/04/11'] |
| minDate | false | boolean/string | Configuração que define a data mínima selecionável no componente |
| maxDate | false | boolean/string | Configuração que define a data máxima selecionável no componente |
