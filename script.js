let cont = document.createElement('div')
cont.classList.add('cont')
document.body.append(cont)

// a create

for (let i = 0; i <= 6; i++) {
   let box = document.createElement('div')
   let topp = document.createElement('div')
   let botttom = document.createElement('div')
   let img = document.createElement('img')
   let txt = document.createElement('p')
   let txt2 = document.createElement('p')
   let yacheyka = document.createElement('div')
   let yacheyka1 = document.createElement('div')
   let yacheyka2 = document.createElement('div')
   let yacheyka3 = document.createElement('div')
   let first = document.createElement('p')
   let second = document.createElement('p')
   let three = document.createElement('p')
   let btn = document.createElement('button')
   let btn_text = document.createElement('p')
   // // b // styling
     

   box.classList.add('box')
   topp.classList.add('topp')
   botttom.classList.add('botttom')
   img.src = "./81fPKd-2AYL\ 1.png"
   txt.innerHTML = "MEN’S CLOTHING (120)"
   txt2.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
   yacheyka.classList.add('yacheyka')
   yacheyka1.classList.add('yacheyka1')
   yacheyka2.classList.add('yacheyka2')
   yacheyka3.classList.add('yacheyka3')
   first.innerHTML = '109'
   second.innerHTML = '3,9'
   three.innerHTML = '120'
   btn.classList.add('btn')
   btn_text.classList.add('btn_text')
   btn_text.innerHTML = 'В избранное'

   ///c
   box.append(topp, botttom)
   topp.append(img)
   yacheyka1.append(first)
   yacheyka2.append(second)
   yacheyka3.append(three)
   yacheyka.append(yacheyka1, yacheyka2, yacheyka3)
   btn.append(btn_text)
   botttom.append(txt, txt2, yacheyka, btn)

   btn.onclick = () => {
      if (btn_text.innerHTML === 'В избранное') {
 
         btn_text.innerHTML = 'Добавлено'
         btn.style.background = '#1F86FF'
         btn.style.transition = '0.5s'
      } else {
   
         btn_text.innerHTML = 'В избранное'
         btn.style.background = '#fff'
         btn.style.transition = '0.5s'

      }   
   }   
   cont.append(box)
}











