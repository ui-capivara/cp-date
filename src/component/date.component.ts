import $ from 'jquery';
import 'jquery-datetimepicker/build/jquery.datetimepicker.min.css';
import 'jquery-datetimepicker';

export class CapivaraDate {
    public $constants;
    public $functions;
    public $bindings;
    private element;
    private oi;
    private inputElement;

    constructor(scope) {
        this.element = scope.element;
    }

    $onViewInit() {
        this.inputElement = this.element.querySelector('input.cp-date');
        this.setModelInInput();
        this.createCpDate();
    }

    $onChanges = (changes) => {
        if (changes && changes[0] && changes[0].name == 'cpModel') {
            this.setModelInInput();
        }
    }

    /**
     * @method void Method responsible for start and configurate the CpDate
     */
    createCpDate() {
        $.datetimepicker.setLocale(this.$constants.language || 'pt-BR')
        $(this.inputElement).datetimepicker({
            timepicker: this.$constants.timepicker == undefined ? true : this.$constants.timepicker,
            datepicker: this.$constants.datepicker == undefined ? true : this.$constants.datepicker,
            format: this.$constants.format == undefined ? 'd/m/Y H:i' : this.$constants.format,
            mask: this.$constants.mask == undefined ? true : this.$constants.mask,
            inline: this.$constants.openedCalendar == undefined ? false : this.$constants.openedCalendar,
            allowTimes: this.$constants.allowedTimes || [],
            defaultTime: this.$constants.defaultTime == undefined ? false : this.$constants.defaultTime,
            defaultDate: this.$constants.defaultDate == undefined ? false : this.$constants.defaultDate,
            step: this.$constants.step || 60,
            weeks: this.$constants.weekNumbers == undefined ? false : this.$constants.weekNumbers,
            yearStart: this.$constants.yearStart || 1950,
            yearEnd: this.$constants.yearEnd || 2050,
            dayOfWeekStart: this.$constants.dayOfWeekStart || 0,
            disabledDates: this.$constants.disabledDates || [],
            minDate: this.$constants.minDate == undefined ? false : this.$constants.minDate,
            maxDate: this.$constants.maxDate == undefined ? false : this.$constants.maxDate,
            onChangeDateTime: (dp, $input) => {
                $(this.inputElement).datetimepicker({mask: this.$constants.mask == undefined ? true : this.$constants.mask})
                this.$bindings.cpModel = dp;
               
            }
        });
    }

    /**
     * @method boolean Method responsible to check if the user selected an allowed time.
     * @param informedDate Date Object
     */
    isAllowedTimes(informedDate: Date): boolean {   
        if(!this.$constants.allowedTimes) return true;
        try{
            const fullTime = informedDate instanceof Date ? informedDate.getHours() + ':' + ('0' + informedDate.getMinutes()).slice(-2) : new Date(informedDate).getHours() + ':' + ('0' + new Date(informedDate).getMinutes()).slice(-2)
            return this.$constants.allowedTimes.filter((validTime) => validTime == fullTime).length > 0;
        }catch (e) { return false }
    }

    /**
     * @method boolean Method responsible to check if the user selected a min allowed date.
     * @param informedDate Date Object
     */
    isAllowedMinDate(informedDate: Date): boolean {
        if (!this.$constants.minDate) return true;
        try {
            const min = this.$constants.minDate instanceof Date ? this.$constants.minDate : new Date(this.$constants.minDate);
            return informedDate && (informedDate.getTime() >= min.getTime());
        } catch (e) { return false; }
    }

    /**
     * @method boolean Method responsible to check if the user selected a max allowed date.
     * @param informedDate Date Object
     */
    isAllowedMaxDate(informedDate: Date): boolean {
        if (!this.$constants.maxDate) return true;
        try {
            const max = this.$constants.maxDate instanceof Date ? this.$constants.maxDate : new Date(this.$constants.maxDate);
            max.setHours(23);
            max.setMinutes(59);
            max.setSeconds(59);
            return informedDate && (informedDate.getTime() <= max.getTime());
        } catch (e) { return false; }
    }

    /**
     * @method boolean Method responsible to check if the user selected a max allowed date.
     * @param informedDate Date Object
     */
    isDisabledDate(informedDate: Date): boolean {
        if (!this.$constants.disabledDates) return false;
        return this.$constants.disabledDates.filter((validDate) => {
            const date = validDate instanceof Date ? validDate : new Date(validDate);
            return (date.getDate() == informedDate.getDate() && date.getMonth() == informedDate.getMonth() && date.getFullYear() == informedDate.getFullYear());
        }).length > 0;
    }

    /**
     *@method void This method delete the value inside of the input 
     */
    resetInput() {
        $(this.inputElement).datetimepicker('reset');
    }

    /**
     * @method void Method responsible of setting the value of the model to the input
     */
    setModelInInput() {
        if (this.$bindings.cpModel instanceof Date &&
            this.isAllowedMinDate(this.$bindings.cpModel) &&
            this.isAllowedMaxDate(this.$bindings.cpModel) &&
            !this.isDisabledDate(this.$bindings.cpModel)  && 
            this.isAllowedTimes(this.$bindings.cpModel)) {
                $(this.inputElement).datetimepicker({value: this.$bindings.cpModel });
        } else {
            this.resetInput();
            $(this.inputElement).datetimepicker({mask: this.$constants.mask == undefined ? true : this.$constants.mask})
            this.$bindings.cpModel = null;
        }
    }

}