// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  'eventsCausingActions': {
    setCredential:
      | 'GET_VC_RESPONSE'
      | 'STORE_RESPONSE'
      | 'CREDENTIAL_DOWNLOADED';
    updateVc:
      | 'STORE_RESPONSE'
      | 'CREDENTIAL_DOWNLOADED'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]';
    storeContext:
      | 'CREDENTIAL_DOWNLOADED'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]';
    logDownloaded: 'CREDENTIAL_DOWNLOADED';
    setTag: 'SAVE_TAG';
    markVcValid: 'done.invoke.vc-item.verifyingCredential:invocation[0]';
    logError: 'error.platform.vc-item.verifyingCredential:invocation[0]';
    lockVc: 'LOCK';
    requestVcContext: 'xstate.init';
    requestStoredContext: 'GET_VC_RESPONSE';
    storeTag: 'SAVE_TAG';
    storeVc: 'LOCK';
  };
  'internalEvents': {
    'done.invoke.vc-item.verifyingCredential:invocation[0]': {
      type: 'done.invoke.vc-item.verifyingCredential:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.vc-item.verifyingCredential:invocation[0]': {
      type: 'error.platform.vc-item.verifyingCredential:invocation[0]';
      data: unknown;
    };
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
    'done.invoke.checkStatus': {
      type: 'done.invoke.checkStatus';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.checkStatus': {
      type: 'error.platform.checkStatus';
      data: unknown;
    };
    'done.invoke.downloadCredential': {
      type: 'done.invoke.downloadCredential';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.downloadCredential': {
      type: 'error.platform.downloadCredential';
      data: unknown;
    };
  };
  'invokeSrcNameMap': {
    checkStatus: 'done.invoke.checkStatus';
    downloadCredential: 'done.invoke.downloadCredential';
    verifyCredential: 'done.invoke.vc-item.verifyingCredential:invocation[0]';
  };
  'missingImplementations': {
    actions: 'logError' | 'lockVc' | 'storeVc';
    services: never;
    guards: never;
    delays: never;
  };
  'eventsCausingServices': {
    checkStatus: 'xstate.init';
    downloadCredential: 'DOWNLOAD_READY';
    verifyCredential: 'VERIFY' | '';
  };
  'eventsCausingGuards': {
    hasCredential: 'GET_VC_RESPONSE' | 'STORE_RESPONSE';
    isVcValid: '';
  };
  'eventsCausingDelays': {};
  'matchesStates':
    | 'checkingVc'
    | 'checkingStore'
    | 'checkingServerData'
    | 'checkingServerData.checkingStatus'
    | 'checkingServerData.downloadingCredential'
    | 'idle'
    | 'editingTag'
    | 'storingTag'
    | 'verifyingCredential'
    | 'checkingVerificationStatus'
    | 'lockingVc'
    | 'storingVcLock'
    | { checkingServerData?: 'checkingStatus' | 'downloadingCredential' };
  'tags': never;
}
