let Balance ={
    capital:500000,
    Labilities:700000,
    current_Labilities:100000,
    fixed_asset: 1000000,
    Current_asset: 200000,
    sum: function(a,b,c=0){
        return a+b+c
    },
    sub: function(a,b){
        return a-b
    },
};

let stock ={
purchase:1600000,
sales:1800000,
direct_expense:250000,
indirect_expense:50000,
indirect_income:0,
};

function onLoad(){
    showContentJsBal();
    showContentJs_pl();
}
onLoad();

function showContentJs_pl(){
    let BalancEle = document.querySelector('#Profit_Loss_show');
    if(!BalancEle){
        return false;
    }
    let result = 0;
    let Purchase =stock.purchase;
    let Direct_Expense =stock.direct_expense;
    let Indirect_Expense =stock.indirect_expense;
    let Sales =stock.sales;
    let Indirect_income =stock.indirect_income;
    let Total_Expense = Balance.sum(Purchase,Direct_Expense,Indirect_Expense);
    let Total_income = Balance.sum(Sales,Indirect_income);
   result = Balance.sub(Total_income,Total_Expense);
   
     BalancEle.innerHTML =`<div class="showContent">
   <div class="Content1">Purchase : ${Purchase}</div>
   <div class="Content2">Direct Expense : ${Direct_Expense}</div>
   <div class="Content3">Indirect Expense :${Indirect_Expense}</div>
   <div class="Content4">Sales : ${Sales}</div>
   <div class="Content5">Indirect Income : ${Indirect_income}</div>
   <div class="Content6">${result > 0 ?`Net Profit: ${result}`:`Net Loss: ${result}`  }</div>
   </div>
   <div class="showContent2">
       <div class="Content7">Total Expense : ${Total_Expense}</div>
       <div class="Content8">Total Income: ${Total_income}</div>
       </div>`
}



function showContentJsBal(){
 let BalanceEle = document.querySelector('#Balance_sheet_show');
 if(!BalanceEle){
    return false;
}
 let result = 0;
 let capital =Balance.capital;
 let Labilities =Balance.Labilities;
 let current_Labilities =Balance.current_Labilities;
 let Fixed_Asset =Balance.fixed_asset;
 let Current_asset =Balance.Current_asset;
 let Total_labilites = Balance.sum(capital,Labilities,current_Labilities);
 let Total_Assets = Balance.sum(Fixed_Asset,Current_asset);
result = Balance.sub(Total_Assets,Total_labilites);

  BalanceEle.innerHTML =`<div class="showContent">
<div class="Content1">Capital : ${capital}</div>
<div class="Content2">Labilities : ${Labilities}</div>
<div class="Content3">Curent Labilities :${current_Labilities}</div>
<div class="Content5">Current Asset : ${Current_asset}</div>
<div class="Content4">Fixed Asset : ${Fixed_Asset}</div>
<div class="Content6">${result > 0 ?`Profit: ${result}`:`Loss: ${result}`  }</div>
</div>
<div class="showContent2">
    <div class="Content7">Total Labilities : ${Total_labilites}</div>
    <div class="Content8">Total Assets: ${Total_Assets}</div>
    </div>`
}



