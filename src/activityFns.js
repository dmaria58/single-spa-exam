export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => {
    	return location.href && location.href.split(`${location.origin}/`)[1]===prefix
    }
  )
}
const showDiv=(prefix)=>{	
	if(location.href.split(`${location.origin}/`)[1]===prefix && document.getElementById(prefix)){
		document.getElementById(prefix).style.display='block'
	}
	else if(document.getElementById(prefix)){
		document.getElementById(prefix).style.display='none'
	}
}
export function navbar(location) {
  return true
}
export function showPageDiv(pageid){
  if(document.getElementById(pageid)){
	showDiv(pageid);
	return true
  }	
  else{
  	return prefix(location, pageid)
  }
}
