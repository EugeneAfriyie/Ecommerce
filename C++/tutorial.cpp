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
    cout <<" 5"<<endl;
    cout<< " 6"<<endl;

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
            cout<< "1.Momo User";
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