// #include <iostream>
// using namespace std;

// int main(){





//     // int 'nn-1' =10;
//     // while(!'nn-1' ){
//     //     cout << 2*'nn-1'-1<< endl;
//     //    'nn-1'++;

//     // };

//     // int x= 10;
//     // while(x){
//     //     cout << 2*x-1;
//     // }

//     int num ;
//     int fat=1;
//     int i = 1;
 
//     cin>>num;

//     while (i <= num){
//         fat = fat * i;
//         i++;
//     }

//     cout << "fat is "  << fat ;

//     return 0;
// }






#include <iostream>
using namespace std;

int main() {
    const int correctPIN = 1111;
    const double minimumBalance = 50.0;
    double balance = 3000.0;
    int pin, attempts = 0;
    int choice = 0;
    double amount;

    // Prompt user for PIN with up to 3 attempts
    while (attempts < 3) {
        cout << "Enter your 4-digit PIN: ";
        cin >> pin;
        if (pin == correctPIN) {
            break;
        } else {
            cout << "Incorrect PIN. Try again.\n";
            attempts++;
        }
    }

    if (attempts == 3) {
        cout << "Too many incorrect attempts. Exiting...\n";
        return 0;
    }

    // ATM Menu using a while loop
    while (choice != 4) {
        cout << "\nATM Menu:\n";
        cout << "1. Deposit\n";
        cout << "2. Withdrawal\n";
        cout << "3. Check Balance\n";
        cout << "4. Quit\n";
        cout << "Select a transaction: ";
        cin >> choice;

        if (choice == 1) {  // Deposit
            cout << "Enter deposit amount: ";
            cin >> amount;
            balance += amount;
            cout << "Deposit successful. New balance: GHS " << balance << "\n";
        } else if (choice == 2) {  // Withdrawal
            cout << "Enter withdrawal amount: ";
            cin >> amount;
            if (amount > balance - minimumBalance) {
                cout << "Insufficient funds. You need to maintain at least GHS 50.00 in your account.\n";
            } else {
                balance -= amount;
                cout << "Withdrawal successful. New balance: GHS " << balance << "\n";
            }
        } else if (choice == 3) {  // Check Balance
            cout << "Current balance: GHS " << balance << "\n";
        } else if (choice == 4) {  // Quit
            cout << "Thank you for using the ATM. Goodbye!\n";
        } else {
            cout << "Invalid choice. Try again.\n";
        }
    }

    return 0;
}

