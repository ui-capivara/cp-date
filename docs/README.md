# Introdução

O cp-date é um componente para seleção de data e/ou hora.

------
# Instalação

## # CDN
Recomendamos vincular a um número de versão específico que você possa atualizar manualmente, porém no exemplo iremos utilizar a ultima versão disponível.
```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/@uicapivara/cp-date@latest/dist/cp-date.min.css">

<!-- Component -->
<script src="https://unpkg.com/@uicapivara/cp-date@latest/dist/cp-date.min.js"></script>
```
Certifique-se de ler sobre as diferentes construções e use a produção, substituindo os arquivos .js por .min.js. Esta é uma compilação otimizada para velocidade em vez de experiência de desenvolvimento.

## # NPM
O NPM é o método de instalação recomendado ao criar aplicativos de grande escala. Ele combina muito bem com bundlers de módulo, como Webpack ou Browserify.

```shell
$ npm install @uicapivara/cp-date --save
```
Após a instalação, precisamos importar o componente no projeto.

Se seu projeto utiliza **typescript** você pode importar o componente normalmente
```javascript
import '@uicapivara/cp-date';
```

Caso contrário, é necessário importa-ços especificando o arquivo **js**.
```javascript
import '@uicapivara/cp-date/index.js'
```

------
#Como Usar

Se cjhegamos até aqui, provavelmente a instalação foi finalizada com êxito e isso significa que já podemos utilizar o cp-date. Para criar uma instância do componente basta colocarmos o html abaixo, informando o nome do atributo para o **cp-model** na qual será usado para atribuir o item selecionado. 

```html
<cp-date cp-model="$ctrl.form.birthday"></cp-date>
```

```javascript
class MyController {
  constructor(){
    this.form.name = 'Caio';
  }
}

capivara.controller(document.body, MyController);
```

Disponibilizamos alguns exemplos em diferentes ambientes, afim de demonstrar sua funcionalidade.

CapivaraJS - [Jsfiddle](https://jsfiddle.net/dsd46pq6/8/) 

Angularjs - [Jsfiddle](https://jsfiddle.net/t0b8xxfj/31/)

Angular - [Jsfiddle](https://jsfiddle.net/1hk7knwq/3665/)

Vuejs - [Jsfiddle](http://jsfiddle.net/td4v7qqd/83/)

React - [Jsfiddle](http://jsfiddle.net/td4v7qqd/84/)

------

# Configuração

O componente aceita algumas constantes que permitem configurar funcionalidades. No exemplo abaixo iremos selecionar um intervalo de datas que podem ser selecionadas, que serão entre **10/05/2018** até **10/06/2018**, podendo escolher apenas a data, e escolhendo a mascara do input como **dd/mm/YYYY**.

Você pode ver esse exemplo no [Jsfiddle](https://jsfiddle.net/dsd46pq6/9/)

```html
<cp-date cp-model="$ctrl.pessoa.aniversario" 
         format="'d/m/Y'" 
         timepicker="false" 
         min-date="'2018/05/10'"
         max-date="'2018/06/10'">
</cp-date>
```

## Objeto de config
| Atributo| Valor Default      | Tipo          | Descrição |
| ---------------- |----------------:| -------:|---------:|
| language | 'pt-BR' | string | Configuração que define a linguagem do calendário. O padrão para utilização são as iniciais da língua|
| datepicker | true | boolean | Configuração responsável por ativar a seleção de data |
| timepicker | true | boolean | Configuração responsável por ativar a seleção de hora |
| mask | true | boolean/string | Configuração responsável por ativar a máscara do input. Também é possível colocar máscaras customizadas, como **'\__:\__'** ou **'d/m/Y'** |
| format | 'd/m/Y H:i' | string | Configuração responsável por atribuir o formato da data que será exibida na input|
| open-calendar | true | boolean | Configuração responsável por fazer com que o calendário fique aberto todo o tempo |
| allowed-times | [] | string array | Configuração responsável por selecionar horários disponíveis a serem selecionados, como por exemplo ['12:00', '13:00'], que permitiria somente selecionar as 12:00 e as 13:00 horas |
| default-time | false | boolean/string | Configuração responsável por selecionar a hora padrão, para quando o componente inicializar, ele já vir selecionado esta hora. Exemplo da utilização: '13:00' |
| default-date | false | boolean/string | Configuração responsável por selecionar uma data padrão, para quando o componente inicializar, ele já vir selecionado esta hora. Exemplo da utilização: '10/12/1993' |
| step | 60 | number | Configuração responsável por atribuir a cada quantos minutos o componente disponibilizará para ser selecionado na parte visual do componente|
| week-numbers | true | boolean | Configuração responsável por apresentar os dias da semana do ano no calendário |
| year-start | 1950 | number | Configuração responsável por atribuir o ano mínimo selecionável no calendário | 
| year-end | 2050 | number | Configuração responsável por atribuir o ano máximo selecionável no calendário |
| day-of-week-start | 0 | number | Configuração responsável por selecionar o primeiro dia da semana do calendário |
| disabled-dates | [] | string array | Configuração responsável por disabilitar algumas datas de serem selecionadas. Exemplo de utilização: ['2018/04/12','2018/04/11'] |
| min-date | false | boolean/string | Configuração que define a data mínima selecionável no componente |
| max-date | false | boolean/string | Configuração que define a data máxima selecionável no componente |