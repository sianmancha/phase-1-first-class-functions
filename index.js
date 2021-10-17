function receivesAFunction (cbFunction) {
    return cbFunction();
};

function returnsANamedFunction () {
    return function aNamedFunction() {};
};

function returnsAnAnonymousFunction () {
    return function () {};
}