// JavaScript Document
$(document).ready(function(){
	var tTitle=$('title').text();
	//Header Links
	$('.header-mini-menu-list a').eq(0).click(function(){
		ga('send','event','Header Links','Click','header_tmall');
		});
		
	$('.header-mini-menu-list a').eq(1).click(function(){
		ga('send','event','Header Links','Click','header_wechat');
		});
		
	$('.header-mini-menu-list a').eq(2).click(function(){
		ga('send','event','Header Links','Click','header_weibo');
		});
	
	$('.page-tab-menu-link').click(function(){
		var tLabel=$.trim($(this).text());
		var tLink=$(this).attr('href');
		ga('send','event','Header Links','Click','header_'+tLabel,{'hitCallback':function(){
			window.location.href=tLink;
			}});
		return false;
		});
		
		
	//Footer Links
	$('.footer-sitemap-link').click(function(){
		var tLabel=$.trim($(this).text());
		var tLink=$(this).attr('href');
		ga('send','event','Footer Links','Link Name','footer_'+tLabel,{'hitCallback':function(){
			window.location.href=tLink;
			}});
		return false;
		});
		
	$('.footer-social-link').eq(0).click(function(){
		var tLink=$(this).attr('href');
		ga('send','event','Footer Links','Click','footer_weibo',{'hitCallback':function(){
			window.location.href=tLink;
			}});
		return false;
		});
		
	$('.footer-social-link').eq(1).click(function(){
		var tLink=$(this).attr('href');
		ga('send','event','Footer Links','Hover','footer_wechat',{'hitCallback':function(){
			window.location.href=tLink;
			}});
		return false;
		});
		
	$('.footer-social-link').eq(2).click(function(){
		var tLink=$(this).attr('href');
		ga('send','event','Footer Links','Click','footer_tmall',{'hitCallback':function(){
			window.location.href=tLink;
			}});
		return false;
		});
		
	$('.footer-social-link').eq(3).click(function(){
		var tLink=$(this).attr('href');
		ga('send','event','Footer Links','Click','footer_jd',{'hitCallback':function(){
			window.location.href=tLink;
			}});
		return false;
		});
		
	$('.footer-bottom-menu-link').click(function(){
		var tLabel=$.trim($(this).text());
		var tLink=$(this).attr('href');
		ga('send','event','Footer Links','Link Name','footer_'+tLabel,{'hitCallback':function(){
			window.location.href=tLink;
			}});
		return false;
		});
		
	
	//Carousel
	$('.hero-banner-carousel li').click(function(){
		var tLink=$(this).attr('href');
		ga('send','event','Carousel Link','Image',tTitle+'_hero-banner_'+tLink);
		});
		
	$('.hero-banner-carousel li a').click(function(){
		var isBlank=$(this).attr('target');
		var tLink=$(this).attr('href');
		if(isBlank=="_blank"){
			ga('send','event','Carousel Link','Click',tTitle+'_hero-banner_'+tLink);
			}
			else{
				ga('send','event','Carousel	Link','Click',tTitle+'_hero-banner_'+tLink,{'hitCallback':function(){
					window.location.href=tLink;
					}});
				return false;
				}
		});
		
	
	//Selector
	$('.atricle-filter-title').click(function(){
		ga('send','event','Selector','Expand','filter_open');
		});
		
	$('.article-option-set').click(function(){
		var dok=$(this).attr('data-option-key');
		if(dok=='close'){
			ga('send','event','Selector','Close','filter_close');
			}
		});
		
	$('.article-filter-tag-wrapper label input').change(function(){
		var tLabel=$.trim($(this).parents('label').text());
		if(!$(this).prop('checked')){
			ga('send','event','Selector','Uncheck',tLabel);
			}
			else{
				ga('send','event','Selector','Check',tLabel);
				}
		});
		
	
	//PLP_PRODUCT
	$('.tile-link').click(function(){
		if(tTitle.indexOf('产品目录')>-1){
			var isBlank=$(this).attr('target');
			var tLink=$(this).attr('href');
			if(isBlank=="_blank"){
				ga('send','event','PLP_PRODUCT','CLICK','PLP_'+tLink);
				}
				else{
					ga('send','event','PLP_PRODUCT','CLICK','PLP_'+tLink,{'hitCallback':function(){
						window.location.href=tLink;
						}});
					return false;
					}
			}
		});
	
	//PLP_EDUCATION
	$('.tile-link').click(function(){
		if(tTitle.indexOf('造型秘籍')>-1){
			var isBlank=$(this).attr('target');
			var tLink=$(this).attr('href');
			if(isBlank=="_blank"){
				ga('send','event','PLP_EDUCATION','CLICK','ELP_'+tLink);
				}
				else{
					ga('send','event','PLP_EDUCATION','CLICK','ELP_'+tLink,{'hitCallback':function(){
						window.location.href=tLink;
						}});
					return false;
					}
			}
		});
		
	
	//PDP Interaction
	$('.reviews-qa-more').click(function(){
		var isBlank=$(this).attr('target');
		var tLabel=$.trim($(this).text());
		var tLink=$(this).attr('href');
		if(isBlank=="_blank"){
			ga('send','event','PDP Interaction','Click',tTitle+'_'+tLabel);
			}
			else{
				ga('send','event','PDP Interaction','Click',tTitle+'_'+tLabel,{'hitCallback':function(){
					window.location.href=tLink;
					}});
				return false;
				}
		});
		
	
	//Video	Play
	$('.video-youku').click(function(){
		var isBlank=$(this).attr('target');
		var tLink=$(this).attr('href');
		if(isBlank=="_blank"){
			ga('send','event','Video	Play','Play',tTitle+'_'+tLink);
			}
			else{
				ga('send','event','Video	Play','Play',tTitle+'_'+tLink,{'hitCallback':function(){
					window.location.href=tLink;
					}});
				return false;
				}
		});
	
	
	//buynow
	$('.buy-online-btn').click(function(){
		var isBlank=$(this).attr('target');
		var tLabel=$.trim($(this).text());
		var tLink=$(this).attr('href');
		if(isBlank=="_blank"){
			ga('send','event','buynow','click',tTitle+'_buynow_'+tLabel);
			}
			else{
				ga('send','event','buynow','click',tTitle+'_buynow_'+tLabel,{'hitCallback':function(){
					window.location.href=tLink;
					}});
				return false;
				}
		});
		
	
	//footer_teaser
	$('.related-section a.tile-link').click(function(){
		var isBlank=$(this).attr('target');
		var tLabel=$.trim($(this).parents('.tile').find('.banner-header').text());
		var tLink=$(this).attr('href');
		if(isBlank=="_blank"){
			ga('send','event','footer_teaser','click',tTitle+'_'+tLabel);
			}
			else{
				ga('send','event','footer_teaser','click',tTitle+'_'+tLabel,{'hitCallback':function(){
					window.location.href=tLink;
					}});
				return false;
				}
		});
	
	
	//video
	$('.article-video-wrapper').click(function(){
		ga('send','event','video','click','video_'+tTitle);
		});
		
	//Social Share
	$('.qz_like_bt').click(function(){
		ga('send','event','Social Share','Click','share');
		});
		
	//more_content&related_product	
	$('.article-carousel-vertical a.slide-link').click(function(){
		var tLabel=$.trim($(this).parents('li.slider-item').find('.big-text').text());
		var isBlank=$(this).attr('target');
		var tLink=$(this).attr('href');
		if(isBlank=="_blank"){
			ga('send','event','more_content','click',tTitle+'_'+tLabel);
			}
			else{
				ga('send','event','more_content','click',tTitle+'_'+tLabel,{'hitCallback':function(){
					window.location.href=tLink;
					}});
				return false;
				}
		});
		
	$('.article-related-product a.tile-link').click(function(){
		var isBlank=$(this).attr('target');
		var tLabel=$.trim($(this).parents('.detail-subcontent').find('.banner-header').text());
		var tLink=$(this).attr('href');
		if(isBlank=="_blank"){
			ga('send','event','related_product','click',tTitle+'_'+tLabel);
			}
			else{
				ga('send','event','related_product','click',tTitle+'_'+tLabel,{'hitCallback':function(){
					window.location.href=tLink;
					}});
				return false;
				}
		});
		
		
	//search_result
	$('.tile-link').click(function(){
		if(tTitle.indexOf('搜索结果')>-1){
			var isBlank=$(this).attr('target');
			var tLink=$(this).attr('href');
			var tLabel=$.trim($(this).parents('.tile').find('.banner-header').text());
			if(isBlank=="_blank"){
				ga('send','event','search_result','click','RESULT_'+tLabel);
				}
				else{
					ga('send','event','search_result','click','RESULT_'+tLabel,{'hitCallback':function(){
						window.location.href=tLink;
						}});
					return false;
					}
			}
		});
	
	});