function openTab(i){
  document.querySelectorAll('.content')
    .forEach(c => c.style.display = 'none');

  document.getElementById('tab'+i).style.display = 'block';
}

openTab(0);
