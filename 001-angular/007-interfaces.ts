/**
 *  Interface:
 *  ---------
 *  -   An interface is a specification identifying a related set of properties
 *      and methods.
 * 
 *  Two ways to use Interface:
 *  1.  As a data type:
 *      -   We can use interface as a data type to make it custom type.
 *          export interface IProduct{
 *              productId : number;
 *              productName : string
 *          }
 *          products : IProduct[] = [];
 *  2.  As a feature Set:
 *      -   We can define interfaces with properties and its features. 
 *              export interface IProduct{
 *                  count : number;
 *                  start(index : number) : void;
 *                  stop() : void;
 *              }
 *              export class myComponent implements DoTiming{
 *                  count: number = 0;
 *                  start(index: number) : void {....}
 *                  stop() : void {....}
 *              }
 */