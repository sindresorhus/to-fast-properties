import {expectType} from 'tsd';
import toFastProperties from './index.js';

expectType<{}>(toFastProperties());

type Fixture = {
	a: boolean;
	b: number;
};

const fixture: Fixture = {
	a: true,
	b: 1
};

expectType<Fixture>(toFastProperties(fixture));
