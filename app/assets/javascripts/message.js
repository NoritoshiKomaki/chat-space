$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =
      `<div class="message">
        <div class="list__member">
          <div class="list__member--left">
            ${message.user_name}
          </div>
          <div class="list__member--right">
            ${message.created_at}
          </div>
        </div>
        <div class="list__text">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
        <image src=${message.image}>
      </div>`
    return html;  
    } else {
      var html = 
      `<div class="message">
        <div class="list__member">
          <div class="list__member--left">
            ${message.user_name}
          </div>
          <div class="list__member--right">
            ${message.created_at}
          </div>
        </div>
        <div class="list__text">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main_chat__list').append(html);
      $('.main_chat__list').animate({ scrollTop: $('.main_chat__list')[0].scrollHeight});
      $('form')[0].reset();
      $('.main_chat__form--right').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    });
  });
});