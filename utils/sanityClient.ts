import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'p6i2xc0d',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skTpe6xHcdFSnWqMMryMQ9tjF7KBcx9eakM2aPauc2tQPQA2xRa0hJAv1DRXgiLZNKcuEjNc2G8vsCxYNmqlQnCJONzaVoMxiqcmUQrhJOwGvzDcn7ZBfZFg7GUUCibIcAWur5sUL5i6ma9nuwFryUJBqStBlqrzzlt7gX8yHTfkd4Y2AHaP',
  useCdn: false,
})
