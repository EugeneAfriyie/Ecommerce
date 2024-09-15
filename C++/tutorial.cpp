// #include <iostream>
// using namespace std; 
// int main (){
//     double A,B;
//     char operatorSign;

//     cout << "Enter number A ";
//     cin >> A;

//     cout << "Enter number operator ";
//     cin >>  operatorSign;

//     cout << "Enter number B ";
//     cin >> B;

//     switch  (operatorSign){
//         case '+':
//             cout<< "The answer for "<<A<< operatorSign <<B <<" is "<<A+B;
//             break;
//         case '-':
//             cout<<"The answer is "<< A - B;
//             break;
//         case '*':
//             cout<< "The answer is "<< A * B;
//             break;
//         default :
//             cout << "Enter valid operator";
//     };

//     return 0;
// }


#include <iostream>
using namespace std; 
int main (){
    
                                                                                                                                                                                                                                                                                                                                                        
    char option;
    string code;

    cout << "Enter MOMO Ussd code  ";
    cin >> code;

    if (code == "*170#"){
    cout <<" Menu"<<endl;
    cout<<"1. Send Money"<<endl;
    cout <<"2. MoMO Pay"<<endl;
    cout <<"3. Buy Airtime"<<endl;
    cout <<"4. Allow Cash out"<<endl;
    cout <<" 5.Finascial Service"<<endl;
    cout<< " 6.Wallet"<<endl;

    cout<< "Select your preferred option  ";
    cin >> option;
    }else{
        cout << "Input a valid Ussd Code for MOMO USSD CODE";
    };



    

   
     switch(option){
        case '1':
            cout<< "1.Momo User";
            break;
        case '2':
            cout<< "1.Momo Pay";
            break;
        case '3':
            cout<< "1.Airtime";
            break;
        case '4':
            cout<< "1.Allow cash out";
            break;
    }
    return 0;
}


// // Eugene Afriyie   UEB3502023
// #include <iostream>
// using namespace std;

// int main (){

//     char option;

//     cout << " "<< endl;
//     cout << " Choose One of the following Option to display content:"<< endl;
//       cout << " "<< endl;
//     cout << " 1. Check Even Or Odd Number."<<endl;
//     cout << " 2. Check Voting Your qualification."<<endl;
//     cout << " 3. Calculate the the Circumference of a circle."<<endl;
//     cout << " 4. Exit.";
//     cout << " "<<endl;
//     cout << " "<<endl;
    


//     cout << "Select your preferred field of  Interest  ";
//     cin >> option;
//     cout << ""<<endl;
    


//     switch (option){

//         case '1':{
//             cout << "Thank You for your interest to Check for Even or Odd Number ;"<<endl;
//             cout << " "<< endl;
//             cout << "Let us know the Number you want to check for : ";
//             int number;
//             cin >> number;

//             if (number % 2 == 0 ){
//                 cout << "Your Number "<< number<< " is an Even Number";
//             } else
//                 {cout << "Your Number "<< number<< " is an Odd Number";}
//             break;}

//         case '2':
//             {cout << "Thank You for your interest to Check your Voting qualification ;" <<endl;
//             cout << " "<< endl;
//             cout << "Let us know your age : " ;
//             int age;
//             cin >> age;

//             if (age > 17 ){
//                 cout << "Your are "<< age <<" years old"<< endl; 
//                 cout << "You qualify to vote when is time for voting" <<endl;
//                 cout << "Thank You for your time" ;
//             } else
//                 {
//                 cout << "Your are "<< age <<" years old"<< endl; 
//                 cout << "You do not qualify to vote, Check again when you are 18"<< endl; 
//                 cout << "Thank You for your time";
//                 }
//             break;}
            
//         case '3':
//             {cout << "Thank You for your interest to calculate the circumference of a circle;"<<endl;
//             cout << " "<< endl;
//             cout << "Make you radius radius ready" << endl;
//             cout << "What is the radius for your circle in cm: " ;
//             double radius;
//             double pi = 3.14;
          
//             cin >> radius;
//             double circumference = pi* radius * radius;
//             cout<< " "<< endl;
//            cout << "The circumference of you Circle with radius " << radius <<"cm is " << circumference ;
//            cout << "NOTE: PI = 3.14"  ;
//            break;}

//         case '4':
//                 {cout << "Hope you found our Service valuable ," << endl;
//                 cout << "Thank you for your time, See again";
//             break;}

//             default:{
//                 cout<< " Thank You for Being on our Platform";
//             }
                
//     };
//     return 0;
// };

// #include <iostream>
// #include <algorithm> // for std::transform
// #include <cctype>    // for std::toupper
// #include <string>    // for std::string
//  using namespace std;

// int main() {
//     string month;

//     cout << "ENTER YOUR MONTH TO DISPLAY THE NUMBER OF DAYS IN IT  ";
//     cin >> month;
//     transform(month.begin(), month.end(), month.begin(), ::toupper);

//     if  (month == "JANUARY"){
//         cout<< " There are 31 days in in January";
//     }
//     else if (month == "FEBRUARY"){
//         cout<< " There are 28 days in in February BUT 29 days in leap year";
//     }
//     else if(month == "MARCH"){
//         cout<< " There are 31 days in in March";
//     }
//     else if (month =="APRIL"){
//         cout<< " There are 30 days in in April";
//     }
//     else if (month =="MAY"){
//         cout<< " There are 31 days in in May";
//     }
//     else if (month =="JUNE"){
//         cout<< " There are 30 days in June";
//     }
//     else if( month =="JULY"){
//         cout<< " There are 31 days in in July";
//     }
//     else if (month =="AUGUST"){
//         cout<< " There are 31 days in in August";
//     }
//     else if (month =="SEPTEMBER"){
//         cout<< " There are 31 days in in September";
//     }
//     else if (month =="OCTOBER"){
//         cout<< " There are 31 days in in October";
//     }
//     else if (month =="NOVEMBER"){
//         cout<< " There are 31 days in in November";
//     }
//     else if (month =="DECEMBER"){
//         cout<< " There are 31 days in in December";
//     }
//     else {
//         cout<<"!!! ENTER VALID MONTH";
//     }
//     return 0;
// }


// Eugene Afriyie UEB3502023
// #include <iostream>
//  using namespace std;

// int main() {
//     int month;

//     cout << " " <<endl;
//     cout << "ENTER YOUR THE NUMBER OF YOUR MONTH IN THE ORDER ON THE CALENDER  "<<  endl;
//     cout << "TO DISPLAY THE NUMBER OF DAYS IN IT i.e May - 5, November - 11 etc  ";
//     cin >> month;
//     cout << " " <<endl;

//     if  (month == 1){
//         cout<< " There are 31 days in 1-January" ;
      

//     }
//     else if (month == 2){
//         cout<< " There are 28 days in in 2-February BUT 29 days in leap year" ;
      

//     }
//     else if(month == 3){
//         cout<< " There are 31 days in in 3-March";
      

//     }
//     else if (month == 4){
//         cout<< " There are 30 days in in 4-April";
//     }
    
//     else if (month == 5){
//         cout<< " There are 31 days in in 5-May";
//     }
//     else if (month == 6){
//         cout<< " There are 30 days in 6-June";
//     }
//     else if( month ==7){
//         cout<< " There are 31 days in in 7-July";
//     }
//     else if (month == 8){
//         cout<< " There are 31 days in in 8-August";
//     }
//     else if (month == 9){
//         cout<< " There are 31 days in in 9-September";
//     }
//     else if (month == 10){
//         cout<< " There are 31 days in in 10-October";
//     }
//     else if (month == 11){
//         cout<< " There are 31 days in in 11-November";
//     }
//     else if (month == 12){
//         cout<< " There are 31 days in in 12-December";
//     }
//     else {
//         cout<<"!!! ENTER VALID MONTH ORDER NUMBER "<< endl;
//         cout<<"i.e: 5 to display details of May "; }
//     return 0;
// }


// #include <iostream>
// using namespace std;

// int main() {
//     int n = 3;
//     while (n >= 0) {
//         cout << n * n << endl;
//         --n;
//     }

//     // cout << n << endl;
//     // while (n < 4) {
//     //     cout << ++n << endl;
//     // }

//     // cout << n << endl;
//     // while (n >= 0) {
//     //     cout << (n /= 2) << endl;
//     // }
//     return 0;
// }










