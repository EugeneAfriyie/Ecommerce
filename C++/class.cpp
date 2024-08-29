#include <iostream>
#include <string>
using namespace std;

int main() {
    // Variable declaration
    double money = 100;
    string username;
    int pin;
    int i = 0;
    int option;

    // Login
    cout << "Please enter your Username: ";
    cin >> username;

    while (i < 3) {
        cout << "Welcome " << username << ", Enter your pin: ";
        cin >> pin;

        if (pin == 1234) {
            cout << "Login Successful! Your Account Balance: " << money << endl;

                cout << "Menu" << endl;
                cout << "1. Deposit" << endl;
                cout << "2. Withdrawal" << endl;
                cout << "3. Check balance" << endl;
                cout << "4. Exit" << endl;
                cout << "Select your preferred option to proceed: ";
                cin >> option;

                switch (option) {
                    case 1: {
                        double deposit;
                        cout << "Enter deposit amount: ";
                        cin >> deposit;
                        money += deposit;
                        cout << "Deposit successful! New balance: " << money << endl;
                        break;
                    }
                    case 2: {
                        double withdrawal;
                        cout << "Enter withdrawal amount: ";
                        cin >> withdrawal;
                        if (withdrawal <= money) {
                            money -= withdrawal;
                            cout << "Withdrawal successful! New balance: " << money << endl;
                        } else {
                            cout << "Insufficient funds!" << endl;
                        }
                        break;
                    }
                    case 3:
                        cout << "Your balance is: " << money << endl;
                        break;
                    case 4:
                        cout << "Thank you for using our service!" << endl;
                        return 0; // Exit the program
                    default:
                        cout << "Invalid option! Please try again." << endl;
                        break;
                }

        } else {
            cout << "Incorrect Pin, Try again!!" << endl;
            i++;
        }
    }

    cout << "Too many failed attempts! Exiting program." << endl;

    return 0;
}
