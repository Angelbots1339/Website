function openTab(evn, tabName){

  var content = document.querySelectorAll('.tabcont');
  for(i = 0; i < content.length; i++){
    content[i].style.display = 'none';
  }

  var tablinks = document.querySelectorAll('.s_tab');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = 's_tab'
  }

  document.getElementById(tabName).style.display = 'block';
  evn.currentTarget.className += ' active';

}
