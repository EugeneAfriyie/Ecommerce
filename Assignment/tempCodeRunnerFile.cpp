  // while (choice != 4) {
    //     cout << "\nATM Menu:\n";
    //     cout << "1. Deposit\n";
    //     cout << "2. Withdrawal\n";
    //     cout << "3. Check Balance\n";
    //     cout << "4. Quit\n";
    //     cout << "Select a transaction: ";
    //     cin >> choice;

    //     if (choice == 1) {  // Deposit
    //         cout << "Enter deposit amount: ";
    //         cin >> amount;
    //         balance += amount;
    //         cout << "Deposit successful. New balance: GHS " << balance << "\n";
    //     } else if (choice == 2) {  // Withdrawal
    //         cout << "Enter withdrawal amount: ";
    //         cin >> amount;
    //         if (amount > balance - minimumBalance) {
    //             cout << "Insufficient funds. You need to maintain at least GHS 50.00 in your account.\n";
    //         } else {
    //             balance -= amount;
    //             cout << "Withdrawal successful. New balance: GHS " << balance << "\n";
    //         }
    //     } else if (choice == 3) {  // Check Balance
    //         cout << "Current balance: GHS " << balance << "\n";
    //     } else if (choice == 4) {  // Quit
    //         cout << "Thank you for using the ATM. Goodbye!\n";
    //     } else {
    //         cout << "Invalid choice. Try again.\n";
    //     }
    // }