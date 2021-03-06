topSuite("Ext.data.proxy.LocalStorage", ['Ext.data.ArrayStore'], function() {
    var proxy;

    if (Ext.supports.LocalStorage) {
        beforeEach(function() {
            Ext.ClassManager.enableNamespaceParseCache = false;
            proxy = new Ext.data.proxy.LocalStorage({ id: 1 });
        });

        afterEach(function() {
            Ext.ClassManager.enableNamespaceParseCache = true;
        });

        (Ext.isSafari10 ? xdescribe : describe)("instantiation", function() {
            it("should extend Ext.data.proxy.WebStorage", function() {
                expect(proxy.superclass).toEqual(Ext.data.proxy.WebStorage.prototype);
            });
        });

        (Ext.isSafari10 ? xdescribe : describe)("methods", function() {
            describe("getStorageObject", function() {
                it("should return localStorage object", function() {
                    // IE8 throw Class doesn't support Automation when comparing localStorage to itself (or sessionStorage)
                    var automationBug = false;

                    try {
                        // eslint-disable-next-line no-unused-expressions
                        localStorage === localStorage;
                    }
                    catch (e) {
                        automationBug = true;
                    }

                    if (!automationBug) {
                        expect(proxy.getStorageObject()).toEqual(localStorage);
                    }
                    else {
                        var storageObject = proxy.getStorageObject();

                        expect(window.localStorage.setItem === storageObject.setItem).toBe(true);
                    }
                });
            });
        });
    }
    else {
        (Ext.isSafari10 ? xdescribe : describe)("instantiation", function() {
            it("should throw an error", function() {
                expect(function() {
                    new Ext.data.proxy.LocalStorage({ id: 1 });
                }).toThrow("Local Storage is not supported in this browser, please use another type of data proxy");
            });
        });
    }
});
