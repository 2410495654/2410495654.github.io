/**
 * Created by asus on 2016/4/13.
 */
(function($){
    var privateFun=function(){

    }
    var PageSwitch=(function(){
        function PageSwitch(element,options){
            this.settins= $.extend(true, $.fn.PageSwitch.default,options||{});
            this.element=element;
            this.init();
        }
        PageSwitch.prototype={
            /*˵������ʼ�����*/
            /*ʵ�֣���ʼ��dom�ṹ�����֡���ҳ�����¼�*/
            init:function(){
                var me=this;
                me.selectors=me.settings.selectors;
                me.sections=me.selectors.sections;
                me.section=me.selectors.section;

                me.direction=me.selectors.direction=="vertical"?true:false;
                me.pagesCount=me.pagesCount();
                me.index=(me.settings.index>=0 && me.settings.index<pagesCount)?me.settings.index:0;

                if(!me.direction){
                    me._initLayout();
                }
                if(me.settings.pagination){
                    me._initPaging();
                }
            },
            /*˵������ȡ����ҳ������*/
            pagesCount:function(){
                return this.section.length;
            },
            /*˵������ȡ�����Ŀ�ȣ�������������߶ȣ�����������*/
            switchLength:function(){
                return this.direction?this.element.height():this.element.width();
            },
            /*˵������Ҫ��Ժ����������ҳ�沼��*/
            _initLayout:function(){
                var me=this;
                var width=(me.pagesCount*100)+"%",
                    cellWidth=(100/me.pagesCount).toFixed(2)+"%";
                me.sections.width(width);
                me.section.width(cellWidth).css("float","left");//��ʽ����

            },
            /*˵����ʵ�ַ�ҳ��dom�ṹ��css��ʽ*/
            _initPaging:function(){
                var me=this,
                    pagesClass=me.selectors.page.substring(1),
                    activeClass=me.selectors.active.substring(1);
                var pageHtml="<ul class="+pagesClass+">";
                for(var i=0;i<me.pagesCount;i++){
                    pageHtml+="<li></li>"
                }
                me.element.append(pageHtml);
                var pages=me.element.find(me.selectors.page);
                me.pageItem=pages.find("li");
                me.pageItem.eq(me.index).addClass(me.activeClass);

                if(me.direction){
                    pages.addClass("vertical");
                }else{
                    pages.addClass("horizontal");
                }

                me._initPaging();
            },
            /*˵������ʼ������¼�*/
            _initEvent:function(){}
        };
        return PageSwitch;
    })();
    $.fn.PageSwitch=function(options){
        return this.each(function(){
           var me =$(this),
               instance=me.data("PageSwitch");
            if(!instance){
                instance=new PageSwitch(me,options);
                me.data("PageSwitch",instance);
            }
            if($.type(options)==="string") return instance[options]();
            $("div").PageSwitch("init");
        });
    }
    $.fn.PageSwitch.default={
        selectors:{
            sections:".sections",
            section:".section",
            page:".pages",
            active:".active"
        },
        index:0,//�� ҳ��ʼչʾ
        easing:"ease",
        duration:500,
        loop:false,
        pagination:true,
        keyboard:true,
        direction:"vertical",
        callback:""
    }
    /*htmlҳ��*/
    $(function(){
        $("[date-PageSwitch]").PageSwitch();
    })








})(jQuery);