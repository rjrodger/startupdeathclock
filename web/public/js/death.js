$(function () {
  function pad(s) { return (''+s).length < 2 ? '0'+s : s; }                     

  var msg = $('#msg');
  msg.html('');


  var companyid = ''

  var params = {};
  var pm = window.location.href.indexOf('#');

  if( -1 != pm ) {
    companyid = window.location.href.substring(pm + 1)

    msg.html('loading...');

    $.ajax({
      url:'/api/1.0/load/'+companyid,
      type:'GET', cache:false, dataType:'json',
      data:params,
      success:function(data) {
        msg.html('');
        setclock(data,true);                     
      },
      error:function(){
        setclock({},true)
      }
    })
  }
  else setclock({},true)




  function setclock(params,updateform) { 
    params = params || {}

    msg.html('');

    var revm = params.revm ? parseInt(params.revm,10) : ''==params.revm ? 0 : 10000;
    var expm = params.expm ? parseInt(params.expm,10) : ''==params.expm ? 0 : 20000;
    var cash = params.cash ? parseInt(params.cash,10) : ''==params.cash ? 0 : 50000;
    var from = params.from ? params.from : '';
    var name = params.name ? params.name : 'Startup';
            
    $('#startup').text(name);

    var death = new Date();
    var start = 8 == from.length ? new Date(parseInt(from.substring(0,4),0),parseInt(from.substring(4,6),0)-1,parseInt(from.substring(6,8),0)) : death;
    var from = ''+start.getFullYear()+pad(start.getMonth()+1)+pad(start.getDate())

    if( expm <= revm ) {
       msg.text('Yah! Revenues cover expenses and you never run out of money!');
    }
    else {
      var coverm = cash / (expm-revm);
      if( coverm < 0.03 ) {
        msg.text('You run out of money as soon as you open the shop door.');
      }
      var millislife = coverm * 30 * 24 * 60 * 60 * 1000;
      death = new Date(start.getTime()+millislife);
    }

    $('#death').countdown('destroy');
    $('#death').countdown({until: death, format:'yowdhms', compact:false, layout:
    '<div class="d{y100}"></div><div class="d{y10}"></div><div class="d{y1}"></div>' + 
    '<div class="sep"></div>' + 
    '<div class="d{o10}"></div><div class="d{o1}"></div>' + 
    '<div class="sep"></div>' + 
    '<div class="d{w1}"></div>' + 
    '<div class="sep"></div>' + 
    '<div class="d{d1}"></div>' + 
    '<div class="sep"></div>' + 
    '<div class="d{h10}"></div><div class="d{h1}"></div>' + 
    '<div class="sep"></div>' + 
    '<div class="d{m10}"></div><div class="d{m1}"></div>' + 
    '<div class="sep"></div>' + 
    '<div class="d{s10}"></div><div class="d{s1}"></div>'});
    
    if( updateform ) {
      $('#from').val(from);
      $('#revm').val(revm);                                           
      $('#expm').val(expm);                                           
      $('#cash').val(cash);    
      $('#name').val(name);
    }                                           
  }


  function resetclock(event) {
    if( (event.which < 48 || 57 < event.which) && (8 != event.which && 46 != event.which) ) return;

    params = {name:$('#name').val(),revm:$('#revm').val(),expm:$('#expm').val(),cash:$('#cash').val(),from:$('#from').val()};
    setclock(params);

    $.ajax({
      url:'/api/1.0/update/'+companyid,
      type:'POST', cache:false, dataType:'json',
      data:params,
      success:markid
    })
  }

  
  function markid(data) {
    if( !companyid ) {
      companyid = data.id

      var href = window.location.href;
      var hm = href.indexOf('#');
      href = -1 != hm ? href.substring(0,hm) : href;
      window.location.href=href+'#'+companyid
    }
  }


  $('#revm').bind('change',resetclock).bind('keyup',resetclock);
  $('#expm').bind('change',resetclock).bind('keyup',resetclock);                  
  $('#cash').bind('change',resetclock).bind('keyup',resetclock);                  
  $('#from').bind('change',resetclock).bind('keyup',resetclock);                  
  $('#name').bind('change',resetclock).bind('keyup',resetclock);        
});
