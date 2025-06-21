import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Mark & Hana Smith',
      lastName: '',
      mobileNumber: '489-178-0042',
      email: 'smithmark@Mhunlimited.com',
      jointNames: '',
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 169600.0,
      saving_balance_usd: 320410.0,
      has_saving_account: true
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 23 2013',
        description: 'Wire Transfer from Hana Smith',
        status: 'Success',
        amount_usd: 200000.0,
        account_no: '****2323'
      },
      {
        transaction_id: '002',
        dateTime: 'March 23 2013',
        description: 'Check Deposit by Mark Smith',
        status: 'Success',
        amount_usd: 500000.0,
        account_no: '****4532'
      },
      {
        transaction_id: '003',
        dateTime: 'April 4 2011',
        description: 'Credit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: 2500000.0,
        account_no: '****2319'
      },
      {
        transaction_id: '004',
        dateTime: 'February 20 2009',
        description: 'Credit from Hana Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****8491'
      },
      {
        transaction_id: '005',
        dateTime: 'February 2 2009',
        description: 'Credit from Mark Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****0933'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Julie',
      lastName: 'Leach',
      mobileNumber: '',
      email: 'j@gmail.com',
      jointNames: '',
      username: 'JULIELEACH6',
      password: 'LEACHJ2047$'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1829939.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'May 20 2024',
        description: 'Credit',
        status: 'Success',
        amount_usd: 11000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'May 1 2024',
        description: 'Credit',
        status: 'Success',
        amount_usd: 400000.0,
        account_no: '****0937'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'April 19 2024',
        description: 'Debit',
        status: 'Success',
        amount_usd: -2316.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'April 11 2024',
        description: 'Debit',
        status: 'Success',
        amount_usd: -3302.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'March 6 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'March 5 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -5000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 5 2024',
        description: 'Credit',
        status: 'Success',
        amount_usd: 30000.0,
        account_no: '****9876'
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'Hannah',
      lastName: 'Brooks',
      mobileNumber: '+1-603-349-0797',
      email: 'brookswebb222@gmail.com',
      jointNames: '',
      profileImg: 'https://i.imgur.com/ykds3Y9.pngz',
      username: 'Hbrooks222',
      password: 'Richcarpenter2010'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 0.96
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'September 1 2024',
        description: 'Credit from COINBASE WALLET',
        status: 'Pending',
        amount_usd: 965000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'August 21 2024',
        description: 'Debit from BOOKING.COM',
        status: 'Success',
        amount_usd: -1302.0,
        account_no: '****0937'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 19 2024',
        description: 'Debit from UNITED AIRLINE',
        status: 'Success',
        amount_usd: -970.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'August 16 2024',
        description: 'Debit from WALMART',
        status: 'Success',
        amount_usd: -375.52,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'August 10 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'August 5 2023',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -7000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'August 5 2023',
        description: 'Credit from INVESTMENT',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****9876'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'August 1 2023',
        description: 'Account Open',
        status: 'Success',
        amount_usd: 100.0,
        account_no: '****9876'
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      fullName: 'Hannah Liza Bennett',
      mobileNumber: '********',
      email: 'h*@gmail.com',
      jointNames: '',
      profileImg: '',
      username: 'HannahLizaBennett',
      password: 'HannahLiza2047$'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 169600.0,
      saving_balance_usd: 320410.0,
      has_saving_account: true
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 4, 2025',
        description: 'Transfer to Dynasty Insurance - XXXXXX3479',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        dateTime: 'April 27, 2025',
        description: 'Transfer from Becky bells donations - XXXXXX1123',
        status: 'Success',
        amount_usd: 152000.0
      },
      {
        dateTime: 'April 27, 2025',
        description: 'VAT Fee - XXXXXX3249',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'March 19, 2025',
        description: 'Transfer from Emily Clark - XXXXXX3892',
        status: 'Success',
        amount_usd: 120000.0
      },
      {
        dateTime: 'March 19, 2025',
        description: 'Transfer Fee - XXXXXX5482',
        status: 'Success',
        amount_usd: -35.0
      },
      {
        dateTime: 'December 22, 2024',
        description: 'Deposit from Willow Solutions - XXXXXX9281',
        status: 'Success',
        amount_usd: 230000.0
      },
      {
        dateTime: 'November 6, 2024',
        description: 'Transfer to Olivia Carter - XXXXXX4311',
        status: 'Success',
        amount_usd: -170000.0
      },
      {
        dateTime: 'November 6, 2024',
        description: 'VAT Fee - XXXXXX2210',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'September 12, 2024',
        description: 'Transfer from Fintrust Partners - XXXXXX1204',
        status: 'Success',
        amount_usd: 170000.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Service Charge - XXXXXX5563',
        status: 'Success',
        amount_usd: -38.0
      },
      {
        dateTime: 'May 9, 2024',
        description: 'Transfer to Mason Wright - XXXXXX9810',
        status: 'Success',
        amount_usd: -145000.0
      },
      {
        dateTime: 'February 28, 2024',
        description: 'Transfer from Larkhill Consultants - XXXXXX6402',
        status: 'Success',
        amount_usd: 210000.0
      },
      {
        dateTime: 'November 20, 2023',
        description: 'Transfer to Ava Bennett - XXXXXX3900',
        status: 'Success',
        amount_usd: -110000.0
      },
      {
        dateTime: 'October 3, 2023',
        description: 'Transfer from Harper & Co. - XXXXXX7201',
        status: 'Success',
        amount_usd: 135000.0
      },
      {
        dateTime: 'August 26, 2023',
        description: 'Transfer Fee - XXXXXX1120',
        status: 'Success',
        amount_usd: -26.0
      },
      {
        dateTime: 'August 26, 2023',
        description: 'Transfer to Lucas Hall - XXXXXX1189',
        status: 'Success',
        amount_usd: -205000.0
      },
      {
        dateTime: 'March 4, 2023',
        description: 'Transfer to Chloe Adams - XXXXXX2045',
        status: 'Success',
        amount_usd: -132000.0
      },
      {
        dateTime: 'December 19, 2022',
        description: 'Transfer from Westbridge Capital - XXXXXX3009',
        status: 'Success',
        amount_usd: 84000.0
      },
      {
        dateTime: 'October 7, 2022',
        description: 'Transfer to Ethan Price - XXXXXX9700',
        status: 'Success',
        amount_usd: -175000.0
      },
      {
        dateTime: 'March 14, 2022',
        description: 'VAT Fee - XXXXXX4421',
        status: 'Success',
        amount_usd: -65.0
      },
      {
        dateTime: 'January 5, 2021',
        description: 'Transfer from Oakridge Global - XXXXXX6652',
        status: 'Success',
        amount_usd: 195000.0
      }
    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      fullName: 'Paul brooks',
      mobileNumber: '********',
      email: 'paulb**@outlook.com',
      jointNames: '',
      profileImg: '',
      username: 'brookPaul36',
      password: 'Linabob'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1350000.0,
      saving_balance_usd: 0.0,
      has_saving_account: false
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 6, 2025',
        description: 'Transfer from OnlyFans - XXXXXX3479',
        status: 'Success',
        amount_usd: 25000.0,
      },
      {
        dateTime: 'May 31, 2025',
        description: 'Transfer from OnlyFans - XXXXXX4421',
        status: 'Success',
        amount_usd: 65000.0,
      },
      {
        dateTime: 'May 30, 2025',
        description: 'VAT Fee - XXXXXX9700',
        status: 'Success',
        amount_usd: -59.0,
      },
      {
        dateTime: 'May 29, 2025',
        description: 'Transfer from OnlyFans - XXXXXX3009',
        status: 'Success',
        amount_usd: 98000.0,
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Transfer from OnlyFans - XXXXXX2045',
        status: 'Success',
        amount_usd: 134000.0,
      },
      {
        dateTime: 'May 27, 2025',
        description: 'VAT Fee - XXXXXX1189',
        status: 'Success',
        amount_usd: -67.0,
      },
      {
        dateTime: 'May 25, 2025',
        description: 'Transfer from OnlyFans - XXXXXX7201',
        status: 'Success',
        amount_usd: 142000.0,
      },
      {
        dateTime: 'May 23, 2025',
        description: 'Transfer from OnlyFans - XXXXXX3904',
        status: 'Success',
        amount_usd: 123500.0,
      },
      {
        dateTime: 'May 22, 2025',
        description: 'VAT Fee - XXXXXX9700',
        status: 'Success',
        amount_usd: -59.0,
      },
      {
        dateTime: 'May 20, 2025',
        description: 'Transfer from OnlyFans - XXXXXX2813',
        status: 'Success',
        amount_usd: 153000.0,
      },
      {
        dateTime: 'May 17, 2025',
        description: 'Transfer from OnlyFans - XXXXXX4089',
        status: 'Success',
        amount_usd: 176000.0,
      },
      {
        dateTime: 'May 15, 2025',
        description: 'Transfer from OnlyFans - XXXXXX7821',
        status: 'Success',
        amount_usd: 170000.0,
      },
      {
        dateTime: 'May 12, 2025',
        description: 'Transfer from OnlyFans - XXXXXX8426',
        status: 'Success',
        amount_usd: 142800.0,
      },
            {
        dateTime: 'May 12, 2025',
        description: 'VAT Fee - XXXXXX1120',
        status: 'Success',
        amount_usd: -49.0,
      },
      {
        dateTime: 'May 9, 2025',
        description: 'Transfer from OnlyFans - XXXXXX5817',
        status: 'Success',
        amount_usd: 230000.0,
      },
      {
        dateTime: 'May 6, 2025',
        description: 'Transfer from OnlyFans - XXXXXX9072',
        status: 'Success',
        amount_usd: 112700.0,
      },
      {
        dateTime: 'May 6, 2025',
        description: 'Transfer from OnlyFans - XXXXXX3491',
        status: 'Success',
        amount_usd: 120000.0,
      },
      {
        dateTime: 'May 3, 2025',
        description: 'Transfer from OnlyFans - XXXXXX2983',
        status: 'Success',
        amount_usd: 110400.0,
      },
      {
        dateTime: 'May 3, 2025',
        description: 'Transfer from OnlyFans - XXXXXX1734',
        status: 'Success',
        amount_usd: 152000.0,
      },
      {
        dateTime: 'May 2, 2025',
        description: 'Transfer from OnlyFans - XXXXXX6652',
        status: 'Success',
        amount_usd: 195000.0,
      },
    ]
  },
];
