#include <iostream>
 #include <string>    
using namespace std;



int main (){
    //variable decraration
        double money = 100;
        string username;
        int pin = 1234;
        int i = 0 ; 
        int option;

        //login+

            cout << "Please Enter your Username ";
            cin >> username;

            cout<< "WElcome  "<< username<< " Enter your pin ";
            cin >> pin;
        while (i<3){
            if (pin == 1234){
                cout<< "Login Successful  Your Accont Balance:"<< money;

                cout<<"Menu"<< endl;
                cout<<"1.Deposite" <<endl;
                cout<<"2.Withdrawal"<< endl;
                cout<<"3.Check balance"<< endl;
                cout<<"4.Exit";
                cout<<""<< endl;
                cout<<"select your preferred option to proceed"<< endl;
r
                



                switch(option){

                }

                break;
            }else{
                cout << "Incorrect Pin , Try again !!" <<endl;
                  i++;
            }

        }
           





    
    return 0;
    }