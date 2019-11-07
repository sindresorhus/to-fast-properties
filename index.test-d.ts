import {expectType, expectError} from 'tsd';
import toFastProperties from '.';

expectType<{}>(toFastProperties());

type boolNum = {a: boolean, b: number};
const a: boolNum = {a: true, b:1};
expectType<boolNum>(toFastProperties(a));
