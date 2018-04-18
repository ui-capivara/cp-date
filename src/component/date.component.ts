import * as Masker from 'maskerjs'
import $ from 'jquery';
import 'jquery-datetimepicker/build/jquery.datetimepicker.min.css';
import 'jquery-datetimepicker';

export class CapivaraDate {
    public $constants;
    public $functions;
    public $bindings;
    private element;

    constructor(scope) {
        this.element = scope.element;
    }

    $onViewInit(){
        let el = this.element.querySelector('input.cp-date');
        $.datetimepicker.setLocale(this.$constants.language)
        $(el).datetimepicker({
            mask:true,
            // i18n:{
            //     de:{
            //      months:[
            //       'Januar','Februar','März','April',
            //       'Mai','Juni','Juli','August',
            //       'September','Oktober','November','Dezember',
            //      ],
            //      dayOfWeek:[
            //       "So.", "Mo", "Di", "Mi", 
            //       "Do", "Fr", "Sa.",
            //      ]
            //     }
            //    },
            // timepicker:false,
            format: this.$constants.format || 'd/m/Y H:i',
            startDate:0,
            // inline: true,
            // allowTimes:[
            //     '12:00', '13:00', '15:00', 
            //     '17:00', '17:05', '17:20', '19:00', '20:00'
            //    ],
            //    minDate:'2018/02/02',
            //    maxDate:'2018/02/03',
            onChangeDateTime: (dp, $input) => {
                this.$bindings.cpModel = dp;
            }
            
        });
    }

}