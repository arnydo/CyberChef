/**
 * @author arnydo [arnydo@protonmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation from "../Operation";
import forge from "node-forge/dist/forge.min.js";

/**
 * DecodeCSR operation
 */
class DecodeCSR extends Operation {

    /**
     * DecodeCSR constructor
     */
    constructor() {
        super();

        this.name = "Decode CSR";
        this.module = "Crypto";
        this.description = "Decodes a Base64 encoded Certificate Signing Request (CSR).<br><br>In public key infrastructure (PKI) systems, a certificate signing request (also CSR or certification request) is a message sent from an applicant to a certificate authority in order to apply for a digital identity certificate. It usually contains the public key for which the certificate should be issued, identifying information (such as a domain name) and integrity protection (e.g., a digital signature). The most common format for CSRs is the PKCS #10 specification and another is the Signed Public Key and Challenge SPKAC format generated by some web browsers. ";
        this.infoURL = "https://en.wikipedia.org/wiki/Certificate_signing_request";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            /* Example arguments. See the project wiki for full details.
            {
                name: "First arg",
                type: "string",
                value: "Don't Panic"
            },
            {
                name: "Second arg",
                type: "number",
                value: 42
            }
            */
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const csrDecrypted = forge.pki.certificationRequestFromPem(input);

        return csrDecrypted;
    }

}

export default DecodeCSR;
