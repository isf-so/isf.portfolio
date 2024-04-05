    class StickyNavigation {
    
        constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.et-hero-tab').click(function() { 
            self.onTabClick(event, $(this)); 
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
        }
        
        onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
        }
        
        onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
        }
        
        onResize() {
        if(this.currentId) {
            this.setSliderCss();
        }
        }
        
        checkTabContainerPosition() {
            if($(window).scrollTop() > 0) {
              $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
            } 
            else {
              $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
            }
          }
        
        findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.et-hero-tab').each(function() {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
            newCurrentId = id;
            newCurrentTab = $(this);
            }
        });
        if(this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
        }
        
        setSliderCss() {
        let width = 0;
        let left = 0;
        if(this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
        }
        
    }
    
    new StickyNavigation();



    $(document).ready(function() {
        $(window).scroll(function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > 0) {
            $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
          } else {
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
          }
        });
      });



      



      function traduirePage() {
        var elements = document.querySelectorAll('[data-francais]');
        elements.forEach(function(element) {
            var traduction = element.getAttribute('data-anglais');
            if (traduction) {
                element.innerHTML = traduction;
            }
        });
    
        var bouton = document.querySelector('button');
        bouton.innerHTML = "Fr";
        bouton.setAttribute('onclick', 'retraduirePage()');
    }
    
    function retraduirePage() {
        var elements = document.querySelectorAll('[data-francais]');
        elements.forEach(function(element) {
            var francais = element.getAttribute('data-francais');
            if (francais) {
                element.innerHTML = francais;
            }
        });
    
        var bouton = document.querySelector('button');
        bouton.innerHTML = "En";
        bouton.setAttribute('onclick', 'traduirePage()');
    }
    
