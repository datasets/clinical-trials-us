<a className="gh-badge" href="https://datahub.io/core/clinical-trials-us"><img src="https://badgen.net/badge/icon/View%20on%20datahub.io/orange?icon=https://datahub.io/datahub-cube-badge-icon.svg&label&scale=1.25" alt="badge" /></a>

Data and processing scripts for clinical trials information in
<http://ClinicalTrials.gov>, a registry and results database of publicly and
privately supported clinical studies of human participants conducted around the
world.

Deposit in this database [has been required][required] since September 2007 for
all "applicable clinical trials" as per [FDAAA 801][].

[required]: http://www.clinicaltrials.gov/ct2/manage-recs/fdaaa#WhichTrialsMustBeRegistered
[FDAAA 801]: http://www.gpo.gov/fdsys/pkg/PLAW-110publ85/pdf/PLAW-110publ85.pdf#page=82

## Getting the data

1. Go to <http://www.clinicaltrials.gov/>
2. Search (no query) to get all results
3. Hit download and select all results
4. Wait while 542 Mb zip file downloads `search_results.zip`
5. unzip - you now have 2.3Gb of clinical trials xml
6. Use the scripts - see below

### Data Structure

It's XML. Here's the XSD: http://clinicaltrials.gov/ct2/html/images/info/public.xsd.

Sample records:

* data/NCT00000102.xml (without results)
* data/NCT01101477.xml (with results)

### Data Stats

139848 XML files as of 2013-02-02.

As of Feb 1st 2013 only 8,044 trials included posted-results.

### Scripts

Node.js script in extract.js - still under development.


