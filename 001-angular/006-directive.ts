/**
 *  Directives:
 *  -   Customer HTML element or attribute used to power up and extend out HTML.
 *  -   It can be :
 *      -   built-in
 *          -   These are structural directives(* makes it structural)
 *              1.  *ngIf: If logic
 *              2.  *nfFor: For loop
 *                  Ex:     <tr *ngFor='let product of products'>
 *                  -   Since it iterates over objects but not on properties
 *                      That's why it used for/of loop instead of for/in loop.
 *      -   custom
 */