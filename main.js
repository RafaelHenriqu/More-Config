function Main(){
  document.querySelectorAll("*").forEach(e=>{
    if (e.hasAttribute("is-shorts")){ // Remove Shorts da home do youtube mas mantem o botão de shorts ao lado
      e.remove()
    }

    if (e.hasAttribute("title")){ // Remove O Botão de Shorts
      if (e.getAttribute("title") == "Shorts"){
        e.remove()
      }
    }
    
    // tab-title

    if (e.hasAttribute("tab-title")){ // Remove O Botão de Shorts
      if (e.getAttribute("tab-title") == "Shorts"){
        e.remove()
      }
    }

    if (e.hasAttribute("is-post")){ // Remove Posts do youtube
      e.parentElement.parentElement.parentElement.remove()
    }
  })

  document.querySelectorAll("ytd-reel-shelf-renderer").forEach(e=>{
    e.remove()
  })

 
}

// Activeted 
Main();
  
const observer = new MutationObserver(() => {
  Main();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
