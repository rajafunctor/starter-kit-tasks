/* eslint-disable max-len */
import * as Apollo from '@apollo/client';
import { DocumentNode } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: string | Date;
    ObjectID: string;
    Upload: File;
};

export type AuthenticationSuccessful = {
    __typename?: 'AuthenticationSuccessful';
    /** Json Web Token */
    token: Scalars['String'];
    /** User authenticated */
    user: User;
};

export type Life = {
    __typename?: 'Life';
    birthday: Scalars['DateTime'];
    description: Scalars['String'];
    firstName: Scalars['String'];
    fullName: Scalars['String'];
    hobbies: Array<Scalars['String']>;
    id: Scalars['ObjectID'];
    lastName: Scalars['String'];
    title: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    /** Validate credentials (username/password) and return a Json Web Token */
    authenticate: AuthenticationSuccessful;
    /** Create a new account/user */
    createAccount: User;
    /** Create a mutation to create new lives */
    createLife: Life;
    /**
     * Create a new topic
     *
     * Authentication is required
     */
    createTopic: Topic;
    /**
     * Post a message on a new topicd
     *
     * Authentication is required
     */
    postMessage: Topic;
    /**
     * Take the Json Web Token (JWT) from headers and returns a new one with a renewed lifetime
     *
     * Authentication is required
     */
    refreshCredentials: Scalars['String'];
    /**
     * Update the display name for the logged in user
     *
     * Authentication is required
     */
    updateDisplayName: User;
};

export type MutationAuthenticateArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
};

export type MutationCreateAccountArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
};

export type MutationCreateLifeArgs = {
    birthday: Scalars['DateTime'];
    description: Scalars['String'];
    firstName: Scalars['String'];
    hobbies: Array<Scalars['String']>;
    lastName: Scalars['String'];
    title: Scalars['String'];
};

export type MutationCreateTopicArgs = {
    attachments?: InputMaybe<Array<Scalars['Upload']>>;
    body: Scalars['String'];
    title: Scalars['String'];
};

export type MutationPostMessageArgs = {
    body: Scalars['String'];
    topicId: Scalars['ObjectID'];
};

export type MutationUpdateDisplayNameArgs = {
    displayName: Scalars['String'];
};

export type Pagination = {
    /** Number of items to fetch from a list */
    limit: Scalars['Int'];
    /** Offset to apply when fetching a list */
    offset: Scalars['Int'];
};

export type Query = {
    __typename?: 'Query';
    /** Fetch user document for the logged in user, returns null otherwise for anonymous */
    account?: Maybe<User>;
    /** Create a query to retrieve a specific life by its ID */
    getLife?: Maybe<Life>;
    /** Create a query to list lives with no arguments */
    listLives: Array<Life>;
    /** Fetch a topic by its ID */
    topic?: Maybe<Topic>;
    /**
     * List topics
     *
     * If not sorting is provided, topics are sorted by descending update date
     */
    topics: Array<Topic>;
};

export type QueryGetLifeArgs = {
    id: Scalars['ObjectID'];
};

export type QueryTopicArgs = {
    id: Scalars['ObjectID'];
};

export type QueryTopicsArgs = {
    pagination?: InputMaybe<Pagination>;
    sorting?: InputMaybe<TopicSorting>;
};

export enum SortingOrder {
    Asc = 'Asc',
    Desc = 'Desc',
}

export type Subscription = {
    __typename?: 'Subscription';
    topicUpdated: Topic;
};

export type SubscriptionTopicUpdatedArgs = {
    topicId: Scalars['ObjectID'];
};

export type Topic = {
    __typename?: 'Topic';
    author: User;
    body: Scalars['String'];
    createdAt: Scalars['DateTime'];
    id?: Maybe<Scalars['ObjectID']>;
    /** list of messages posted on the topic */
    messages: Array<TopicMessage>;
    /** Counting how many messages are posted on this topic */
    messagesCount: Scalars['Int'];
    title: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type TopicMessage = {
    __typename?: 'TopicMessage';
    author: User;
    body: Scalars['String'];
    createdAt: Scalars['DateTime'];
    id?: Maybe<Scalars['ObjectID']>;
};

export type TopicSorting = {
    field: TopicSortingField;
    order: SortingOrder;
};

export enum TopicSortingField {
    CreateDate = 'CreateDate',
    UpdateDate = 'UpdateDate',
}

export type User = {
    __typename?: 'User';
    /** Public displayed on interfaces */
    displayName: Scalars['String'];
    id: Scalars['ObjectID'];
    /** List of topic authored by the user */
    topics: Topic;
    username: Scalars['String'];
};

export type LifeDataFragment = {
    __typename?: 'Life';
    birthday: string | Date;
    description: string;
    firstName: string;
    fullName: string;
    hobbies: Array<string>;
    id: string;
    lastName: string;
    title: string;
};

export type GetListLivesQueryVariables = Exact<{ [key: string]: never }>;

export type GetListLivesQuery = {
    __typename?: 'Query';
    listLives: Array<{
        __typename?: 'Life';
        birthday: string | Date;
        description: string;
        firstName: string;
        fullName: string;
        hobbies: Array<string>;
        id: string;
        lastName: string;
        title: string;
    }>;
};

export type GetLifeQueryVariables = Exact<{
    id: Scalars['ObjectID'];
}>;

export type GetLifeQuery = {
    __typename?: 'Query';
    getLife?:
        | {
              __typename?: 'Life';
              birthday: string | Date;
              description: string;
              firstName: string;
              fullName: string;
              hobbies: Array<string>;
              id: string;
              lastName: string;
              title: string;
          }
        | null
        | undefined;
};

export type CreateLifeMutationVariables = Exact<{
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    description: Scalars['String'];
    hobbies: Array<Scalars['String']> | Scalars['String'];
    birthday: Scalars['DateTime'];
    title: Scalars['String'];
}>;

export type CreateLifeMutation = {
    __typename?: 'Mutation';
    createLife: {
        __typename?: 'Life';
        birthday: string | Date;
        description: string;
        firstName: string;
        fullName: string;
        hobbies: Array<string>;
        id: string;
        lastName: string;
        title: string;
    };
};

export type TopicPreviewDataFragment = {
    __typename?: 'Topic';
    id?: string | null | undefined;
    title: string;
    messagesCount: number;
    author: { __typename?: 'User'; id: string; displayName: string };
};

export type TopicMessageDataFragment = {
    __typename?: 'TopicMessage';
    id?: string | null | undefined;
    body: string;
    author: { __typename?: 'User'; id: string; displayName: string };
};

export type TopicFullDataFragment = {
    __typename?: 'Topic';
    id?: string | null | undefined;
    title: string;
    body: string;
    messages: Array<{
        __typename?: 'TopicMessage';
        id?: string | null | undefined;
        body: string;
        author: { __typename?: 'User'; id: string; displayName: string };
    }>;
    author: { __typename?: 'User'; id: string; displayName: string };
};

export type GetTopicsQueryVariables = Exact<{
    pagination?: InputMaybe<Pagination>;
    sorting?: InputMaybe<TopicSorting>;
}>;

export type GetTopicsQuery = {
    __typename?: 'Query';
    topics: Array<{
        __typename?: 'Topic';
        id?: string | null | undefined;
        title: string;
        messagesCount: number;
        author: { __typename?: 'User'; id: string; displayName: string };
    }>;
};

export type GetTopicQueryVariables = Exact<{
    id: Scalars['ObjectID'];
}>;

export type GetTopicQuery = {
    __typename?: 'Query';
    topic?:
        | {
              __typename?: 'Topic';
              id?: string | null | undefined;
              title: string;
              body: string;
              messages: Array<{
                  __typename?: 'TopicMessage';
                  id?: string | null | undefined;
                  body: string;
                  author: { __typename?: 'User'; id: string; displayName: string };
              }>;
              author: { __typename?: 'User'; id: string; displayName: string };
          }
        | null
        | undefined;
};

export type CreateTopicMutationVariables = Exact<{
    title: Scalars['String'];
    body: Scalars['String'];
}>;

export type CreateTopicMutation = {
    __typename?: 'Mutation';
    createTopic: {
        __typename?: 'Topic';
        id?: string | null | undefined;
        title: string;
        body: string;
        messages: Array<{
            __typename?: 'TopicMessage';
            id?: string | null | undefined;
            body: string;
            author: { __typename?: 'User'; id: string; displayName: string };
        }>;
        author: { __typename?: 'User'; id: string; displayName: string };
    };
};

export type PostMessageMutationVariables = Exact<{
    topicId: Scalars['ObjectID'];
    body: Scalars['String'];
}>;

export type PostMessageMutation = {
    __typename?: 'Mutation';
    postMessage: {
        __typename?: 'Topic';
        id?: string | null | undefined;
        title: string;
        body: string;
        messages: Array<{
            __typename?: 'TopicMessage';
            id?: string | null | undefined;
            body: string;
            author: { __typename?: 'User'; id: string; displayName: string };
        }>;
        author: { __typename?: 'User'; id: string; displayName: string };
    };
};

export type OnTopicUpdatesSubscriptionVariables = Exact<{
    topicId: Scalars['ObjectID'];
}>;

export type OnTopicUpdatesSubscription = {
    __typename?: 'Subscription';
    topicUpdated: { __typename?: 'Topic'; id?: string | null | undefined };
};

export type UserPreviewDataFragment = { __typename?: 'User'; id: string; displayName: string };

export type UserFullDataFragment = { __typename?: 'User'; id: string; username: string; displayName: string };

export type CreateNewAccountMutationVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
}>;

export type CreateNewAccountMutation = { __typename?: 'Mutation'; createAccount: { __typename?: 'User'; id: string } };

export type UpdateDisplayNameMutationVariables = Exact<{
    displayName: Scalars['String'];
}>;

export type UpdateDisplayNameMutation = {
    __typename?: 'Mutation';
    updateDisplayName: { __typename?: 'User'; id: string; displayName: string };
};

export const LifeDataFragmentDoc = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LifeData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Life' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'hobbies' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export const UserPreviewDataFragmentDoc = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'UserPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export const TopicPreviewDataFragmentDoc = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Topic' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'messagesCount' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'UserPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export const TopicMessageDataFragmentDoc = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicMessageData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicMessage' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'UserPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export const TopicFullDataFragmentDoc = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicFullData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Topic' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'messages' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TopicMessageData' } }],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicMessageData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicMessage' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'UserPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export const UserFullDataFragmentDoc = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'UserFullData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export const GetListLivesDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getListLives' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'listLives' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'LifeData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LifeData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Life' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'hobbies' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;

/**
 * __useGetListLivesQuery__
 *
 * To run a query within a React component, call `useGetListLivesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListLivesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListLivesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListLivesQuery(
    baseOptions?: Apollo.QueryHookOptions<GetListLivesQuery, GetListLivesQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useQuery<GetListLivesQuery, GetListLivesQueryVariables>(GetListLivesDocument, options);
}
export function useGetListLivesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetListLivesQuery, GetListLivesQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useLazyQuery<GetListLivesQuery, GetListLivesQueryVariables>(GetListLivesDocument, options);
}
export type GetListLivesQueryHookResult = ReturnType<typeof useGetListLivesQuery>;
export type GetListLivesLazyQueryHookResult = ReturnType<typeof useGetListLivesLazyQuery>;
export type GetListLivesQueryResult = Apollo.QueryResult<GetListLivesQuery, GetListLivesQueryVariables>;
export const GetLifeDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getLife' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ObjectID' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'getLife' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'LifeData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LifeData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Life' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'hobbies' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;

/**
 * __useGetLifeQuery__
 *
 * To run a query within a React component, call `useGetLifeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLifeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLifeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLifeQuery(baseOptions: Apollo.QueryHookOptions<GetLifeQuery, GetLifeQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useQuery<GetLifeQuery, GetLifeQueryVariables>(GetLifeDocument, options);
}
export function useGetLifeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLifeQuery, GetLifeQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useLazyQuery<GetLifeQuery, GetLifeQueryVariables>(GetLifeDocument, options);
}
export type GetLifeQueryHookResult = ReturnType<typeof useGetLifeQuery>;
export type GetLifeLazyQueryHookResult = ReturnType<typeof useGetLifeLazyQuery>;
export type GetLifeQueryResult = Apollo.QueryResult<GetLifeQuery, GetLifeQueryVariables>;
export const CreateLifeDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'createLife' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'firstName' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'lastName' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'description' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'hobbies' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
                            },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'birthday' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createLife' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'firstName' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'firstName' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'lastName' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'lastName' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'description' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'description' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'hobbies' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'hobbies' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'birthday' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'birthday' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'title' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'LifeData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LifeData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Life' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'hobbies' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export type CreateLifeMutationFn = Apollo.MutationFunction<CreateLifeMutation, CreateLifeMutationVariables>;

/**
 * __useCreateLifeMutation__
 *
 * To run a mutation, you first call `useCreateLifeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLifeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLifeMutation, { data, loading, error }] = useCreateLifeMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      description: // value for 'description'
 *      hobbies: // value for 'hobbies'
 *      birthday: // value for 'birthday'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateLifeMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateLifeMutation, CreateLifeMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useMutation<CreateLifeMutation, CreateLifeMutationVariables>(CreateLifeDocument, options);
}
export type CreateLifeMutationHookResult = ReturnType<typeof useCreateLifeMutation>;
export type CreateLifeMutationResult = Apollo.MutationResult<CreateLifeMutation>;
export type CreateLifeMutationOptions = Apollo.BaseMutationOptions<CreateLifeMutation, CreateLifeMutationVariables>;
export const GetTopicsDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getTopics' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'pagination' } },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Pagination' } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'sorting' } },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicSorting' } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'topics' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'pagination' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'pagination' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'sorting' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'sorting' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TopicPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Topic' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'messagesCount' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'UserPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;

/**
 * __useGetTopicsQuery__
 *
 * To run a query within a React component, call `useGetTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopicsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetTopicsQuery(baseOptions?: Apollo.QueryHookOptions<GetTopicsQuery, GetTopicsQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useQuery<GetTopicsQuery, GetTopicsQueryVariables>(GetTopicsDocument, options);
}
export function useGetTopicsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetTopicsQuery, GetTopicsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useLazyQuery<GetTopicsQuery, GetTopicsQueryVariables>(GetTopicsDocument, options);
}
export type GetTopicsQueryHookResult = ReturnType<typeof useGetTopicsQuery>;
export type GetTopicsLazyQueryHookResult = ReturnType<typeof useGetTopicsLazyQuery>;
export type GetTopicsQueryResult = Apollo.QueryResult<GetTopicsQuery, GetTopicsQueryVariables>;
export const GetTopicDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getTopic' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ObjectID' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'topic' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TopicFullData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicMessageData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicMessage' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicFullData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Topic' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'messages' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TopicMessageData' } }],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'UserPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;

/**
 * __useGetTopicQuery__
 *
 * To run a query within a React component, call `useGetTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopicQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTopicQuery(baseOptions: Apollo.QueryHookOptions<GetTopicQuery, GetTopicQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useQuery<GetTopicQuery, GetTopicQueryVariables>(GetTopicDocument, options);
}
export function useGetTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopicQuery, GetTopicQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useLazyQuery<GetTopicQuery, GetTopicQueryVariables>(GetTopicDocument, options);
}
export type GetTopicQueryHookResult = ReturnType<typeof useGetTopicQuery>;
export type GetTopicLazyQueryHookResult = ReturnType<typeof useGetTopicLazyQuery>;
export type GetTopicQueryResult = Apollo.QueryResult<GetTopicQuery, GetTopicQueryVariables>;
export const CreateTopicDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'createTopic' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'body' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createTopic' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'title' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'body' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'body' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TopicFullData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicMessageData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicMessage' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicFullData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Topic' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'messages' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TopicMessageData' } }],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'UserPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export type CreateTopicMutationFn = Apollo.MutationFunction<CreateTopicMutation, CreateTopicMutationVariables>;

/**
 * __useCreateTopicMutation__
 *
 * To run a mutation, you first call `useCreateTopicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTopicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTopicMutation, { data, loading, error }] = useCreateTopicMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useCreateTopicMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateTopicMutation, CreateTopicMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useMutation<CreateTopicMutation, CreateTopicMutationVariables>(CreateTopicDocument, options);
}
export type CreateTopicMutationHookResult = ReturnType<typeof useCreateTopicMutation>;
export type CreateTopicMutationResult = Apollo.MutationResult<CreateTopicMutation>;
export type CreateTopicMutationOptions = Apollo.BaseMutationOptions<CreateTopicMutation, CreateTopicMutationVariables>;
export const PostMessageDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'postMessage' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'topicId' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ObjectID' } },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'body' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postMessage' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'topicId' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'topicId' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'body' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'body' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TopicFullData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicMessageData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicMessage' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TopicFullData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Topic' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'messages' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TopicMessageData' } }],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserPreviewData' } }],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'UserPreviewData' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export type PostMessageMutationFn = Apollo.MutationFunction<PostMessageMutation, PostMessageMutationVariables>;

/**
 * __usePostMessageMutation__
 *
 * To run a mutation, you first call `usePostMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postMessageMutation, { data, loading, error }] = usePostMessageMutation({
 *   variables: {
 *      topicId: // value for 'topicId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function usePostMessageMutation(
    baseOptions?: Apollo.MutationHookOptions<PostMessageMutation, PostMessageMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useMutation<PostMessageMutation, PostMessageMutationVariables>(PostMessageDocument, options);
}
export type PostMessageMutationHookResult = ReturnType<typeof usePostMessageMutation>;
export type PostMessageMutationResult = Apollo.MutationResult<PostMessageMutation>;
export type PostMessageMutationOptions = Apollo.BaseMutationOptions<PostMessageMutation, PostMessageMutationVariables>;
export const OnTopicUpdatesDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: { kind: 'Name', value: 'onTopicUpdates' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'topicId' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ObjectID' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'topicUpdated' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'topicId' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'topicId' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode;

/**
 * __useOnTopicUpdatesSubscription__
 *
 * To run a query within a React component, call `useOnTopicUpdatesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnTopicUpdatesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnTopicUpdatesSubscription({
 *   variables: {
 *      topicId: // value for 'topicId'
 *   },
 * });
 */
export function useOnTopicUpdatesSubscription(
    baseOptions: Apollo.SubscriptionHookOptions<OnTopicUpdatesSubscription, OnTopicUpdatesSubscriptionVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useSubscription<OnTopicUpdatesSubscription, OnTopicUpdatesSubscriptionVariables>(
        OnTopicUpdatesDocument,
        options
    );
}
export type OnTopicUpdatesSubscriptionHookResult = ReturnType<typeof useOnTopicUpdatesSubscription>;
export type OnTopicUpdatesSubscriptionResult = Apollo.SubscriptionResult<OnTopicUpdatesSubscription>;
export const CreateNewAccountDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'createNewAccount' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createAccount' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'username' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'password' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export type CreateNewAccountMutationFn = Apollo.MutationFunction<
    CreateNewAccountMutation,
    CreateNewAccountMutationVariables
>;

/**
 * __useCreateNewAccountMutation__
 *
 * To run a mutation, you first call `useCreateNewAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewAccountMutation, { data, loading, error }] = useCreateNewAccountMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateNewAccountMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateNewAccountMutation, CreateNewAccountMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useMutation<CreateNewAccountMutation, CreateNewAccountMutationVariables>(
        CreateNewAccountDocument,
        options
    );
}
export type CreateNewAccountMutationHookResult = ReturnType<typeof useCreateNewAccountMutation>;
export type CreateNewAccountMutationResult = Apollo.MutationResult<CreateNewAccountMutation>;
export type CreateNewAccountMutationOptions = Apollo.BaseMutationOptions<
    CreateNewAccountMutation,
    CreateNewAccountMutationVariables
>;
export const UpdateDisplayNameDocument = /* #__PURE__ */ {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'updateDisplayName' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'displayName' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updateDisplayName' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'displayName' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'displayName' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode;
export type UpdateDisplayNameMutationFn = Apollo.MutationFunction<
    UpdateDisplayNameMutation,
    UpdateDisplayNameMutationVariables
>;

/**
 * __useUpdateDisplayNameMutation__
 *
 * To run a mutation, you first call `useUpdateDisplayNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDisplayNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDisplayNameMutation, { data, loading, error }] = useUpdateDisplayNameMutation({
 *   variables: {
 *      displayName: // value for 'displayName'
 *   },
 * });
 */
export function useUpdateDisplayNameMutation(
    baseOptions?: Apollo.MutationHookOptions<UpdateDisplayNameMutation, UpdateDisplayNameMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };

    return Apollo.useMutation<UpdateDisplayNameMutation, UpdateDisplayNameMutationVariables>(
        UpdateDisplayNameDocument,
        options
    );
}
export type UpdateDisplayNameMutationHookResult = ReturnType<typeof useUpdateDisplayNameMutation>;
export type UpdateDisplayNameMutationResult = Apollo.MutationResult<UpdateDisplayNameMutation>;
export type UpdateDisplayNameMutationOptions = Apollo.BaseMutationOptions<
    UpdateDisplayNameMutation,
    UpdateDisplayNameMutationVariables
>;
