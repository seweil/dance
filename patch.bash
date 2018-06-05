echo Updating date2
SRC="src/Home.js"
TEMP_FILE="_tmp"
sed "s-<p>Updated: .*</p>-<p>Updated: `date`</p>-" $SRC > $TEMP_FILE
mv -f $TEMP_FILE $SRC
