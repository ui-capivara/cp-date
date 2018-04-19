import $ from 'jquery';
import 'jquery-datetimepicker/build/jquery.datetimepicker.min.css';
import 'jquery-datetimepicker';

export class CapivaraDate {
    public $constants;
    public $functions;
    public $bindings;
    private element;
    private oi;

    constructor(scope) {
        this.element = scope.element;
    }

    $onViewInit(){
        let el = this.element.querySelector('input.cp-date');
        $.datetimepicker.setLocale(this.$constants.language || 'pt-BR')
        $(el).datetimepicker({
            mask: this.$constants.mask || true,
            timepicker: this.$constants.timepicker || true,
            datepicker: this.$constants.datepicker || true,
            format: this.$constants.format || 'd/m/Y H:i',
            inline: this.$constants.openedCalendar || false,
            allowTimes: this.$constants.allowedTimes || [],
            // startDate:0,
            //    minDate:'2018/02/02',
            //    maxDate:'2018/02/03',
            onChangeDateTime: (dp, $input) => {
                if(this.$constants.allowedTimes && dp){
                    let fullTime = dp.getHours() + ':' + ('0'+dp.getMinutes()).slice(-2);
                    let check = false;
                    console.log(fullTime)
                    this.$constants.allowedTimes.forEach(element => {
                        if(element == fullTime){
                            check = true;
                        }                        
                    });
                    if(!check){
                        $(el).datetimepicker('reset')
                    }

                }
                
                this.$bindings.cpModel = dp;
            }
            
        });
    }
}