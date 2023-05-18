import { ChangeEvent, SyntheticEvent, useState } from "react";

function SignupCard() {

    const [values, setValue] = useState({
        email: '',
        phone: '',
        city: 'Tallinn',
        code: '372',
        terms: false
    })

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.type === "checkbox") {
            setValue({ ...values, [event.target.name]: event.target.checked })
        } else {
            setValue({ ...values, [event.target.name]: event.target.value })
        }
    }

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue({ ...values, [event.target.name]: event.target.value })
    }

    const onEmailValidataion = (event: ChangeEvent) => {
        const email = document.getElementById("email")
        const emailError = document.getElementById("email-error")

        if (values.email === "") {
            emailError!.innerText = "Email is required";
            email?.classList.add("border-danger")
        } else {
            emailError!.innerText = ""
            email?.classList.remove("border-danger")
        }
    }

    const onPhoneValidation = (event: ChangeEvent) => {
        const phone = document.getElementById("phone")
        const phoneError = document.getElementById("phone-error")
        const code = document.getElementById("phone-code")

        if (values.phone === "") {
            phoneError!.innerText = "Phone is required";
            phone?.classList.add("border-danger")
            code?.classList.add("border-danger")
        } else {
            phoneError!.innerText = ""
            phone?.classList.remove("border-danger")
            code?.classList.remove("border-danger")
        }
    }

    const onTermsValidation = (event: ChangeEvent) => {
        const terms = document.getElementById("terms")
        const termsError = document.getElementsByClassName("validity")

        if (values.terms === false) {
            terms!.style.border = " 1px solid #dc3545"
            for (let i = 0; i < termsError.length; i++) {
                termsError[i].classList.add("text-danger");
            }
        } else {
            terms!.style.border = "1px solid #ced4da"
            for (let i = 0; i < termsError.length; i++) {
                termsError[i].classList.remove("text-danger");
            }
        }
    }

    const handleFormSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        event.stopPropagation();

        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        const terms = document.getElementById("terms")
        const code = document.getElementById("phone-code")

        const emailError = document.getElementById("email-error")
        const phoneError = document.getElementById("phone-error")
        const termsError = document.getElementsByClassName("validity")

        if (values.email === "") {
            emailError!.innerText = "Email is required";
            email?.classList.add("border-danger")
        } else {
            emailError!.innerText = ""
            email?.classList.remove("border-danger")
        }

        if (values.phone === "") {
            phoneError!.innerText = "Phone is required";
            phone?.classList.add("border-danger")
            code?.classList.add("border-danger")
        } else {
            phoneError!.innerText = ""
            phone?.classList.remove("border-danger")
            code?.classList.remove("border-danger")
        }

        if (values.terms === false) {
            terms!.style.border = " 1px solid #dc3545"
            for (let i = 0; i < termsError.length; i++) {
                termsError[i].classList.add("text-danger");
            }
        } else {
            terms!.style.border = "1px solid #ced4da"
            for (let i = 0; i < termsError.length; i++) {
                termsError[i].classList.remove("text-danger");
            }
        }
    }

    return (
        <div className="card rounded-xl mt-3 animate-signup-card">
            <div className="card-body">
                <h5>Become a Bolt driver</h5>
                <p>
                    If you have multiple cars or drivers
                    <span>
                        <a href="#"> sign up as a fleet owner.</a>
                    </span>
                </p>
                <form noValidate onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control input-lg"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={handleInput}
                            onBlur={onEmailValidataion}
                        />
                        <small id="email-error" className="form-text text-danger"></small>
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <div className="d-flex flex-row">
                                <div className="mr-3">
                                    <select defaultValue="372" className="form-control" name="code" id="phone-code" aria-label="code" onChange={handleSelect}>
                                        <option data-countrycode="DZ" value="213">
                                            +213
                                        </option>
                                        <option data-countrycode="AD" value="376">
                                            +376
                                        </option>
                                        <option data-countrycode="AO" value="244">
                                            +244
                                        </option>
                                        <option data-countrycode="AI" value="1264">
                                            +1264
                                        </option>
                                        <option data-countrycode="AG" value="1268">
                                            +1268
                                        </option>
                                        <option data-countrycode="AR" value="54">
                                            +54
                                        </option>
                                        <option data-countrycode="AM" value="374">
                                            +374
                                        </option>
                                        <option data-countrycode="AW" value="297">
                                            +297
                                        </option>
                                        <option data-countrycode="AU" value="61">
                                            +61
                                        </option>
                                        <option data-countrycode="AT" value="43">
                                            +43
                                        </option>
                                        <option data-countrycode="AZ" value="994">
                                            +994
                                        </option>
                                        <option data-countrycode="BS" value="1242">
                                            +1242
                                        </option>
                                        <option data-countrycode="BH" value="973">
                                            +973
                                        </option>
                                        <option data-countrycode="BD" value="880">
                                            +880
                                        </option>
                                        <option data-countrycode="BB" value="1246">
                                            +1246
                                        </option>
                                        <option data-countrycode="BY" value="375">
                                            +375
                                        </option>
                                        <option data-countrycode="BE" value="32">
                                            +32
                                        </option>
                                        <option data-countrycode="BZ" value="501">
                                            +501
                                        </option>
                                        <option data-countrycode="BJ" value="229">
                                            +229
                                        </option>
                                        <option data-countrycode="BM" value="1441">
                                            +1441
                                        </option>
                                        <option data-countrycode="BT" value="975">
                                            +975
                                        </option>
                                        <option data-countrycode="BO" value="591">
                                            +591
                                        </option>
                                        <option data-countrycode="BA" value="387">
                                            +387
                                        </option>
                                        <option data-countrycode="BW" value="267">
                                            +267
                                        </option>
                                        <option data-countrycode="BR" value="55">
                                            +55
                                        </option>
                                        <option data-countrycode="BN" value="673">
                                            +673
                                        </option>
                                        <option data-countrycode="BG" value="359">
                                            +359
                                        </option>
                                        <option data-countrycode="BF" value="226">
                                            +226
                                        </option>
                                        <option data-countrycode="BI" value="257">
                                            +257
                                        </option>
                                        <option data-countrycode="KH" value="855">
                                            +855
                                        </option>
                                        <option data-countrycode="CM" value="237">
                                            +237
                                        </option>
                                        <option data-countrycode="CA" value="1">
                                            +1
                                        </option>
                                        <option data-countrycode="CV" value="238">
                                            +238
                                        </option>
                                        <option data-countrycode="KY" value="1345">
                                            +1345
                                        </option>
                                        <option data-countrycode="CF" value="236">
                                            +236
                                        </option>
                                        <option data-countrycode="CL" value="56">
                                            +56
                                        </option>
                                        <option data-countrycode="CN" value="86">
                                            +86
                                        </option>
                                        <option data-countrycode="CO" value="57">
                                            +57
                                        </option>
                                        <option data-countrycode="KM" value="269">
                                            +269
                                        </option>
                                        <option data-countrycode="CG" value="242">
                                            +242
                                        </option>
                                        <option data-countrycode="CK" value="682">
                                            +682
                                        </option>
                                        <option data-countrycode="CR" value="506">
                                            +506
                                        </option>
                                        <option data-countrycode="HR" value="385">
                                            +385
                                        </option>
                                        <option data-countrycode="CU" value="53">
                                            +53
                                        </option>
                                        <option data-countrycode="CY" value="90392">
                                            +90392
                                        </option>
                                        <option data-countrycode="CY" value="357">
                                            +357
                                        </option>
                                        <option data-countrycode="CZ" value="42">
                                            +42
                                        </option>
                                        <option data-countrycode="DK" value="45">
                                            +45
                                        </option>
                                        <option data-countrycode="DJ" value="253">
                                            +253
                                        </option>
                                        <option data-countrycode="DM" value="1809">
                                            +1809
                                        </option>
                                        <option data-countrycode="DO" value="1809">
                                            +1809
                                        </option>
                                        <option data-countrycode="EC" value="593">
                                            +593
                                        </option>
                                        <option data-countrycode="EG" value="20">
                                            +20
                                        </option>
                                        <option data-countrycode="SV" value="503">
                                            +503
                                        </option>
                                        <option data-countrycode="GQ" value="240">
                                            +240
                                        </option>
                                        <option data-countrycode="ER" value="291">
                                            +291
                                        </option>
                                        <option data-countrycode="EE" value="372">
                                            +372
                                        </option>
                                        <option data-countrycode="ET" value="251">
                                            +251
                                        </option>
                                        <option data-countrycode="FK" value="500">
                                            +500
                                        </option>
                                        <option data-countrycode="FO" value="298">
                                            +298
                                        </option>
                                        <option data-countrycode="FJ" value="679">
                                            +679
                                        </option>
                                        <option data-countrycode="FI" value="358">
                                            +358
                                        </option>
                                        <option data-countrycode="FR" value="33">
                                            +33
                                        </option>
                                        <option data-countrycode="GF" value="594">
                                            +594
                                        </option>
                                        <option data-countrycode="PF" value="689">
                                            +689
                                        </option>
                                        <option data-countrycode="GA" value="241">
                                            +241
                                        </option>
                                        <option data-countrycode="GM" value="220">
                                            +220
                                        </option>
                                        <option data-countrycode="GE" value="7880">
                                            +7880
                                        </option>
                                        <option data-countrycode="DE" value="49">
                                            +49
                                        </option>
                                        <option data-countrycode="GH" value="233">
                                            +233
                                        </option>
                                        <option data-countrycode="GI" value="350">
                                            +350
                                        </option>
                                        <option data-countrycode="GR" value="30">
                                            +30
                                        </option>
                                        <option data-countrycode="GL" value="299">
                                            +299
                                        </option>
                                        <option data-countrycode="GD" value="1473">
                                            +1473
                                        </option>
                                        <option data-countrycode="GP" value="590">
                                            +590
                                        </option>
                                        <option data-countrycode="GU" value="671">
                                            +671
                                        </option>
                                        <option data-countrycode="GT" value="502">
                                            +502
                                        </option>
                                        <option data-countrycode="GN" value="224">
                                            +224
                                        </option>
                                        <option data-countrycode="GW" value="245">
                                            +245
                                        </option>
                                        <option data-countrycode="GY" value="592">
                                            +592
                                        </option>
                                        <option data-countrycode="HT" value="509">
                                            +509
                                        </option>
                                        <option data-countrycode="HN" value="504">
                                            +504
                                        </option>
                                        <option data-countrycode="HK" value="852">
                                            +852
                                        </option>
                                        <option data-countrycode="HU" value="36">
                                            +36
                                        </option>
                                        <option data-countrycode="IS" value="354">
                                            +354
                                        </option>
                                        <option data-countrycode="IN" value="91">
                                            +91
                                        </option>
                                        <option data-countrycode="ID" value="62">
                                            +62
                                        </option>
                                        <option data-countrycode="IR" value="98">
                                            +98
                                        </option>
                                        <option data-countrycode="IQ" value="964">
                                            +964
                                        </option>
                                        <option data-countrycode="IE" value="353">
                                            +353
                                        </option>
                                        <option data-countrycode="IL" value="972">
                                            +972
                                        </option>
                                        <option data-countrycode="IT" value="39">
                                            +39
                                        </option>
                                        <option data-countrycode="JM" value="1876">
                                            +1876
                                        </option>
                                        <option data-countrycode="JP" value="81">
                                            +81
                                        </option>
                                        <option data-countrycode="JO" value="962">
                                            +962
                                        </option>
                                        <option data-countrycode="KZ" value="7">
                                            +7
                                        </option>
                                        <option data-countrycode="KE" value="254">
                                            +254
                                        </option>
                                        <option data-countrycode="KI" value="686">
                                            +686
                                        </option>
                                        <option data-countrycode="KP" value="850">
                                            +850
                                        </option>
                                        <option data-countrycode="KR" value="82">
                                            +82
                                        </option>
                                        <option data-countrycode="KW" value="965">
                                            +965
                                        </option>
                                        <option data-countrycode="KG" value="996">
                                            +996
                                        </option>
                                        <option data-countrycode="LA" value="856">
                                            +856
                                        </option>
                                        <option data-countrycode="LV" value="371">
                                            +371
                                        </option>
                                        <option data-countrycode="LB" value="961">
                                            +961
                                        </option>
                                        <option data-countrycode="LS" value="266">
                                            +266
                                        </option>
                                        <option data-countrycode="LR" value="231">
                                            +231
                                        </option>
                                        <option data-countrycode="LY" value="218">
                                            +218
                                        </option>
                                        <option data-countrycode="LI" value="417">
                                            +417
                                        </option>
                                        <option data-countrycode="LT" value="370">
                                            +370
                                        </option>
                                        <option data-countrycode="LU" value="352">
                                            +352
                                        </option>
                                        <option data-countrycode="MO" value="853">
                                            +853
                                        </option>
                                        <option data-countrycode="MK" value="389">
                                            +389
                                        </option>
                                        <option data-countrycode="MG" value="261">
                                            +261
                                        </option>
                                        <option data-countrycode="MW" value="265">
                                            +265
                                        </option>
                                        <option data-countrycode="MY" value="60">
                                            +60
                                        </option>
                                        <option data-countrycode="MV" value="960">
                                            +960
                                        </option>
                                        <option data-countrycode="ML" value="223">
                                            +223
                                        </option>
                                        <option data-countrycode="MT" value="356">
                                            +356
                                        </option>
                                        <option data-countrycode="MH" value="692">
                                            +692
                                        </option>
                                        <option data-countrycode="MQ" value="596">
                                            +596
                                        </option>
                                        <option data-countrycode="MR" value="222">
                                            +222
                                        </option>
                                        <option data-countrycode="YT" value="269">
                                            +269
                                        </option>
                                        <option data-countrycode="MX" value="52">
                                            +52
                                        </option>
                                        <option data-countrycode="FM" value="691">
                                            +691
                                        </option>
                                        <option data-countrycode="MD" value="373">
                                            +373
                                        </option>
                                        <option data-countrycode="MC" value="377">
                                            +377
                                        </option>
                                        <option data-countrycode="MN" value="976">
                                            +976
                                        </option>
                                        <option data-countrycode="MS" value="1664">
                                            +1664
                                        </option>
                                        <option data-countrycode="MA" value="212">
                                            +212
                                        </option>
                                        <option data-countrycode="MZ" value="258">
                                            +258
                                        </option>
                                        <option data-countrycode="MN" value="95">
                                            +95
                                        </option>
                                        <option data-countrycode="NA" value="264">
                                            +264
                                        </option>
                                        <option data-countrycode="NR" value="674">
                                            +674
                                        </option>
                                        <option data-countrycode="NP" value="977">
                                            +977
                                        </option>
                                        <option data-countrycode="NL" value="31">
                                            +31
                                        </option>
                                        <option data-countrycode="NC" value="687">
                                            +687
                                        </option>
                                        <option data-countrycode="NZ" value="64">
                                            +64
                                        </option>
                                        <option data-countrycode="NI" value="505">
                                            +505
                                        </option>
                                        <option data-countrycode="NE" value="227">
                                            +227
                                        </option>
                                        <option data-countrycode="NG" value="234">
                                            +234
                                        </option>
                                        <option data-countrycode="NU" value="683">
                                            +683
                                        </option>
                                        <option data-countrycode="NF" value="672">
                                            +672
                                        </option>
                                        <option data-countrycode="NP" value="670">
                                            +670
                                        </option>
                                        <option data-countrycode="NO" value="47">
                                            +47
                                        </option>
                                        <option data-countrycode="OM" value="968">
                                            +968
                                        </option>
                                        <option data-countrycode="PW" value="680">
                                            +680
                                        </option>
                                        <option data-countrycode="PA" value="507">
                                            +507
                                        </option>
                                        <option data-countrycode="PG" value="675">
                                            +675
                                        </option>
                                        <option data-countrycode="PY" value="595">
                                            +595
                                        </option>
                                        <option data-countrycode="PE" value="51">
                                            +51
                                        </option>
                                        <option data-countrycode="PH" value="63">
                                            +63
                                        </option>
                                        <option data-countrycode="PL" value="48">
                                            +48
                                        </option>
                                        <option data-countrycode="PT" value="351">
                                            +351
                                        </option>
                                        <option data-countrycode="PR" value="1787">
                                            +1787
                                        </option>
                                        <option data-countrycode="QA" value="974">
                                            +974
                                        </option>
                                        <option data-countrycode="RE" value="262">
                                            +262
                                        </option>
                                        <option data-countrycode="RO" value="40">
                                            +40
                                        </option>
                                        <option data-countrycode="RU" value="7">
                                            +7
                                        </option>
                                        <option data-countrycode="RW" value="250">
                                            +250
                                        </option>
                                        <option data-countrycode="SM" value="378">
                                            +378
                                        </option>
                                        <option data-countrycode="ST" value="239">
                                            +239
                                        </option>
                                        <option data-countrycode="SA" value="966">
                                            +966
                                        </option>
                                        <option data-countrycode="SN" value="221">
                                            +221
                                        </option>
                                        <option data-countrycode="CS" value="381">
                                            +381
                                        </option>
                                        <option data-countrycode="SC" value="248">
                                            +248
                                        </option>
                                        <option data-countrycode="SL" value="232">
                                            +232
                                        </option>
                                        <option data-countrycode="SG" value="65">
                                            +65
                                        </option>
                                        <option data-countrycode="SK" value="421">
                                            +421
                                        </option>
                                        <option data-countrycode="SI" value="386">
                                            +386
                                        </option>
                                        <option data-countrycode="SB" value="677">
                                            +677
                                        </option>
                                        <option data-countrycode="SO" value="252">
                                            +252
                                        </option>
                                        <option data-countrycode="ZA" value="27">
                                            +27
                                        </option>
                                        <option data-countrycode="ES" value="34">
                                            +34
                                        </option>
                                        <option data-countrycode="LK" value="94">
                                            +94
                                        </option>
                                        <option data-countrycode="SH" value="290">
                                            +290
                                        </option>
                                        <option data-countrycode="KN" value="1869">
                                            +1869
                                        </option>
                                        <option data-countrycode="SC" value="1758">
                                            +1758
                                        </option>
                                        <option data-countrycode="SD" value="249">
                                            +249
                                        </option>
                                        <option data-countrycode="SR" value="597">
                                            +597
                                        </option>
                                        <option data-countrycode="SZ" value="268">
                                            +268
                                        </option>
                                        <option data-countrycode="SE" value="46">
                                            +46
                                        </option>
                                        <option data-countrycode="CH" value="41">
                                            +41
                                        </option>
                                        <option data-countrycode="SI" value="963">
                                            +963
                                        </option>
                                        <option data-countrycode="TW" value="886">
                                            +886
                                        </option>
                                        <option data-countrycode="TJ" value="7">
                                            +7
                                        </option>
                                        <option data-countrycode="TH" value="66">
                                            +66
                                        </option>
                                        <option data-countrycode="TG" value="228">
                                            +228
                                        </option>
                                        <option data-countrycode="TO" value="676">
                                            +676
                                        </option>
                                        <option data-countrycode="TT" value="1868">
                                            +1868
                                        </option>
                                        <option data-countrycode="TN" value="216">
                                            +216
                                        </option>
                                        <option data-countrycode="TR" value="90">
                                            +90
                                        </option>
                                        <option data-countrycode="TM" value="7">
                                            +7
                                        </option>
                                        <option data-countrycode="TM" value="993">
                                            +993
                                        </option>
                                        <option data-countrycode="TC" value="1649">
                                            +1649
                                        </option>
                                        <option data-countrycode="TV" value="688">
                                            +688
                                        </option>
                                        <option data-countrycode="UG" value="256">
                                            +256
                                        </option>
                                        <option data-countrycode="GB" value="44">
                                            +44
                                        </option>
                                        <option data-countrycode="UA" value="380">
                                            +380
                                        </option>
                                        <option data-countrycode="AE" value="971">
                                            +971
                                        </option>
                                        <option data-countrycode="UY" value="598">
                                            +598
                                        </option>
                                        <option data-countrycode="US" value="1">
                                            +1
                                        </option>
                                        <option data-countrycode="UZ" value="7">
                                            +7
                                        </option>
                                        <option data-countrycode="VU" value="678">
                                            +678
                                        </option>
                                        <option data-countrycode="VA" value="379">
                                            +379
                                        </option>
                                        <option data-countrycode="VE" value="58">
                                            +58
                                        </option>
                                        <option data-countrycode="VN" value="84">
                                            +84
                                        </option>
                                        <option data-countrycode="VG" value="84">
                                            +1284
                                        </option>
                                        <option data-countrycode="VI" value="84">
                                            +1340
                                        </option>
                                        <option data-countrycode="WF" value="681">
                                            +681
                                        </option>
                                        <option data-countrycode="YE" value="969">
                                            +969
                                        </option>
                                        <option data-countrycode="YE" value="967">
                                            +967
                                        </option>
                                        <option data-countrycode="ZM" value="260">
                                            +260
                                        </option>
                                        <option data-countrycode="ZW" value="263">
                                            +263
                                        </option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        required
                                        onChange={handleInput}
                                        onBlur={onPhoneValidation}
                                    />
                                </div>
                            </div>
                            <small id="phone-error" className="form-text text-danger"></small>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <select defaultValue="Tallinn" name="city" className="form-control" id="city" onChange={handleSelect}>
                            <option value="Kuressaare">Kuressaare</option>
                            <option value="Narva">Narva</option>
                            <option value="P&auml;rnu">P&auml;rnu</option>
                            <option value="P&eth;ltsamaa">P&eth;ltsamaa</option>
                            <option value="Rakvere">Rakvere</option>
                            <option value="Silam&auml;e">Silam&auml;e</option>
                            <option value="Tallinn">Tallinn</option>
                        </select>
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <input type="checkbox" className="mr-3 form-control" id="terms" required 
                        onChange={handleInput} onBlur={onTermsValidation} name="terms" />
                        <label className="form-check-label" htmlFor="terms">
                            <span className="validity">I agree to Bolt's </span>
                            <span>
                                <a href="#">Terms of Service </a>
                            </span>
                            <span className="validity">and </span>
                            <span>
                                <a href="#">Privacy Policy</a>
                            </span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn rounded-pill w-100 shadow text-white py-2"
                    >
                        SIGN UP AS A DRIVER
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignupCard;
