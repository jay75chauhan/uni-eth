export const user = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Wallet Address',
      type: 'string',
    },
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
    },
    {
      name: 'transactions',
      title: 'Transactions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'transaction' }],
        },
      ],
    },
  ],
}
