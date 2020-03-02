/**
 * File: fakerService.ts
 * Purpose:
 * Uses the "faker" library to generate random fake data
 * Author: Chris Meredith <tallin32@gmail.com>
 */

import { Country, Alpha3 } from "../model/country";
import { ServiceBase } from "./serviceBase";
import { Address } from "../model/address";
import faker from 'faker';
import { SERVICE_BASE_IDENTIFIER } from "../constants/identifiers";
import { injectable, inject } from "tsyringe";

@injectable()
export class FakerService extends ServiceBase {
    public generateAddress(_country?: Alpha3): Address {
        const country: Alpha3 = (!!_country) ? _country : this.getRandomCountryCode();
        const cntry = FakerService.SUPPORTED_COUNTRIES.filter(c => c.code === country) as Country[];
        if (cntry.length === 0) {
            const err = {
                message: "Invalid country specified",
                statusCode: 500
            };
            throw new Error("Invalid country");
        }
        if (cntry.length > 1) {
            throw new Error("Ambiguous country - should not even happen!");
        }
        const locales = cntry[0].locale;
        const countryName = cntry[0].shortName;
        const localesLen = locales.length;
        let locale: string = "";
        if (localesLen === 1) {
            locale = locales[0];
        } else {
            locale = locales[Math.floor(Math.random() * localesLen)];
        }
        // What I'm about to do is a bit unorthodox, but apparently the type definitions for Faker define "locale" as a read-only property, whereas the actual JavaScript
        // implementation define it as a read-write property.  So faker.setLocale() seems to be
        // something cooked up in the diseased imagination of the type library author or something.
        (faker as any).locale = locale;
        const ret: Address = {
            house: Math.floor(Math.random() * 65535).toString(),
            street: faker.address.streetAddress(false),
            city: faker.address.city(),
            county: faker.address.county(),
            state: faker.address.state(),
            stateCode: faker.address.stateAbbr(),
            postalCode: faker.address.zipCode(),
            country: countryName,
            countryCode: country,
        };
        return ret;
    }
    private static /* final */ SUPPORTED_COUNTRIES: Country[] = [
        {
            code: "CAN",
            locale: ["en_CA", "fr_CA"],
            shortName: "Canada"
        },
        {
            code: "MEX",
            locale: ["es_MX"],
            shortName: "Mexico"
        },
        {
            code: "NLD",
            locale: ["nl"],
            shortName: "Netherlands"
        },
        {
            code: "USA",
            locale: ["en"],
            shortName: "United States"
        }
    ];

    private getRandomCountryCode(): Alpha3 {
        const countryIndex = Math.floor(Math.random() * FakerService.SUPPORTED_COUNTRIES.length);
        return FakerService.SUPPORTED_COUNTRIES[countryIndex].code;
    }

}