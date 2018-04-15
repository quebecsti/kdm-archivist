var survivors = require('../../js/models/survivors')({ dataDir: 'test_data/mocha/' })

describe('Survivors', () => {
    before(function() {
        // Clear db before all tests
        survivors.dropAll()
    })

    describe('getAll()', () => {
        it('should return [] since no survivors have been added', (done) => {
            survivors.getAll((docs) => {
                if (docs.length == 0) done()
                else done(new Error())
            })
        })
    })

    describe('addBaseSurvivor()', () => {
        it('should insert new survivor with baseline stats into db', (done) => {
            survivors.addBaseSurvivor((newDoc) => {
                if (newDoc.name == null && newDoc.xp == 0) done()
                else done(new Error())
            })
        })
    })

    describe('count()', () => {
        it('should be equal to one', (done) => {
            survivors.count((count) => {
                if (count == 1) done()
                else done(new Error())
            })
        })
    })

    describe('add()', function() {
        it('should add survivor object to db', function(done) {
            var testSurvivor = {
                name: 'Testy',
                sex: 'm',
                survival: 1,
                movement: 5,
                accuracy: 0,
                strength: 0,
                evasion: 0,
                luck: 2,
                speed: 0
            }
            survivors.add(testSurvivor, (newDoc) => {
                if (newDoc.name === 'Testy') done()
                else done(new Error())
            })
        })
    })

    describe('countMatching()', function() {
        it('should return one matching test survivor', function(done) {
            survivors.countMatching({ luck: 2 }, (count) => {
                if (count == 1) done()
                else done(new Error())
            })
        })
    })
})