<script>
function getDeviceSignals(){
  const ua   = navigator.userAgent || '';
  const tz   = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  const scr  = (screen?.width||0) + 'x' + (screen?.height||0);
  const lang = navigator.language || (navigator.languages||[])[0] || '';
  return { ua, tz, screen: scr, lang };
}

function fileToDataURL(file){
  return new Promise((resolve, reject)=>{
    if(!file) return resolve('');
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = reject;
    fr.readAsDataURL(file); // data:image/png;base64,....
  });
}
</script>
