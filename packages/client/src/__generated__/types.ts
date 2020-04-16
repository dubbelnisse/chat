/* THIS IS A GENERATED FILE - DO NOT MODIFY */
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO-8601 encoded UTC date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
   __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  history: Array<Message>;
};

export type Message = {
   __typename?: 'Message';
  id: Scalars['String'];
  userId: Scalars['String'];
  name: Scalars['String'];
  message: Scalars['String'];
  sent: Scalars['DateTime'];
};


export type Mutation = {
   __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addMessage: Array<Message>;
};


export type MutationAddMessageArgs = {
  input: MessageInput;
};

export type MessageInput = {
  userId: Scalars['String'];
  name: Scalars['String'];
  message: Scalars['String'];
};

export type Subscription = {
   __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']>;
  messageAdded: Message;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type MessagesSubscriptionVariables = {};


export type MessagesSubscription = (
  { __typename?: 'Subscription' }
  & { messageAdded: (
    { __typename?: 'Message' }
    & Pick<Message, 'message' | 'name' | 'userId' | 'id' | 'sent'>
  ) }
);
