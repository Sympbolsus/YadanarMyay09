

oi()
function oi(){
let sButton = document.getElementsByClassName("btncart");
      for (let i = 0; i < sButton.length;i++){
         
        let button = sButton[i];
        button.addEventListener("click", oo);
      }


}
        function oo(event){
   let buttonn = event.target
   let buttonTarget = buttonn.parentElement.parentElement.parentElement
   console.log(buttonTarget)
   let title = buttonTarget.getElementsByClassName("v")[0].innerText
   let price = buttonTarget.getElementsByClassName("ih")[0].innerText
   let priced = price.slice(1);
   let photo = buttonTarget.getElementsByClassName("imgsize")[0].src
   lastt(title,priced,photo)

}
function lastt(title,priced,photo){

addRow();
    function addRow() {

$("tbody").append(`
<tr>
    <td class="width-50">
        <button class="btn btn-outline-primary del-btn">
            <i class="fas fa-trash-alt"></i>
        </button>
    </td>
    <td class="width-300 font-weight-bold my-5">
      <img src="${photo}" alt="" class="w-img" id="wood">
        <p>${title}</p>
    </td>
    <td class="width-150 font-weight-bold my-5">
      <p class="cost" id="50">${priced}</p>
    </td>
    <td class="width-150">
        <input type="number" class="form-control text-right quantity"  value="1" min=0">
    </td>
    <td class="text-right">
        <h4 class="mb-0 price">0</h4>
    </td>
</tr>
`);

}

}
TextDecoderStream
$("tbody").delegate(".del-btn","click",function () {



  $(this).parentsUntil("tbody").remove();
  
  total();



})
function total(){
  $("#total").html($(".price").toArray().map(el=>el.innerHTML).reduce((x,y) => Number(x) + Number(y)));
}
 $('.shopp').click(function () {
 $('.shop-area').toggle();
 });

 $("tbody").delegate("input","keyup change", function (){
  let quantity = $(this).parentsUntil("tbody").find(".quantity").val();
  let cost = $(this).parentsUntil("tbody").find(".cost").html();
  let ff = $(this).parentsUntil("tbody").find(".price").html(cost * quantity);
  total();
});

