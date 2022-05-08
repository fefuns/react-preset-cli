import React from 'react'
import { getType } from 'utils/tools'

export default function GetType() {
  return (
    <>
      <h1>常见的类型判断</h1>
      <ul>
        <li>
          <div className='box'>
            <h2 className='title'>
              1. typeof - 只能判断值类型，其他就是 function 和 object, typeof(null) 也是object{' '}
            </h2>
          </div>
        </li>
        <li>
          <div className='box'>
            <h2 className='title'>
              2. A instanceof B - 用来判断A 是不是 B的实例，而不是获取类型。而且instanceof
              只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型
            </h2>
            <div>
              <p>[] instanceof Array; // true</p>
              <p>[] instanceof Object; // true</p>
              <p>{} instanceof Object; // true</p>
              但是
              <p>'abc' instanceof String; // false</p>
              <p>111 instanceof Number; // false</p>
              <h2 className='title'>
                也就是说，instanceof
                只能用来判断引用类型，没法判断基础数据类型（值类型），而且它还不能精确的判断具体是属于哪种数据类型
              </h2>
            </div>
          </div>
        </li>
        <li>
          <div className='box'>
            <h2 className='title'>3. Object.prototype.toString.call</h2>
            <div>
              <p>
                Object.prototype.toString.call('') ; // [object String] <br />
                Object.prototype.toString.call(1) ; // [object Number] <br />
                Object.prototype.toString.call(true) ; // [object Boolean] <br />
                Object.prototype.toString.call(Symbol()); //[object Symbol] <br />
                Object.prototype.toString.call(undefined) ; // [object Undefined] <br />
                Object.prototype.toString.call(null) ; // [object Null] <br />
                Object.prototype.toString.call(new Function()) ; // [object Function] <br />
                Object.prototype.toString.call(new Date()) ; // [object Date] <br />
                Object.prototype.toString.call([]) ; // [object Array] <br />
                Object.prototype.toString.call(new RegExp()) ; // [object RegExp] <br />
                Object.prototype.toString.call(new Error()) ; // [object Error] <br />
                Object.prototype.toString.call(document) ; // [object HTMLDocument] <br />
                Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global
                的引用
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className='box'>
            <h2 className='title'>4. utils/toos.ts 封装的getType 方法</h2>
            <div>
              {getType(1)} <br />
              {getType('1')} <br />
              {getType(undefined)} <br />
              {getType(null)} <br />
              {getType(true)} <br />
              {getType([])} <br />
              {getType({})} <br />
              {getType(() => {})} <br />
              {getType(new Date())} <br />
              {getType(new RegExp(/i/g))} <br />
              {getType(Symbol())} <br />
              {getType(NaN)}
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}
