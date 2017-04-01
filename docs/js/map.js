Array.prototype.remove = function(s) 
{
    for (var i = 0; i < this.length; i++) 
    {
        if (s == this[i])
            this.splice(i, 1);
    }
}


/**

* @auther JPbirdy
* @date 2012/7/25
**/
function Map() 
{
    //用数组存放键，用于进行遍历
    this.keys = new Array();
    //Object对象建立map
    this.data = new Object();
    
    this.put = function(key, value) 
    {
        //map中无数据，向List添加键
        if(this.data[key] == null)
        {
            this.keys.push(key);
        }
        this.data[key] = value;

    };
    
    this.get = function(key) 
    {
        return this.data[key];
    };
    
    this.remove = function(key) 
    {
        this.keys.remove(key);
        this.data[key] = null;
    };
    
    this.Sort = function()
    {
        this.keys.sort();
    }
    
    this.SortNumber = function(AscendDirection)
    {
        if(AscendDirection)
        {
            this.keys.sort(function(a, b){return a - b});
        }
        else
        {
            this.keys.sort(function(a, b){return b - a});
        }
    }
    /**
     * 遍历Map,执行处理函数
     * @param {Function} 回调函数 function(key,value,index){..}
     */
    this.each = function(fn)
    {
        if(typeof fn != 'function')
        {
            return;
        }
        var len = this.keys.length;
        for(var i=0;i<len;i++)
        {
            var k = this.keys[i];
            fn(k,this.data[k],i);
        }
    };
    
    /**
     * 获取键值数组(类似Java的entrySet())
     * @return 键值对象{key,value}的数组
     */
    this.entrys = function() 
    {
        var len = this.keys.length;
        var entrys = new Array(len);
        for (var i = 0; i < len; i++) {
            entrys[i] = {
                key : this.keys[i],
                value : this.data[i]
            };
        }
        return entrys;
    };
    
    this.isEmpty = function() 
    {
        return this.keys.length == 0;
    };
    
    this.size = function()
    {
        return this.keys.length;
    };
    
    this.toString = function()
    {
        var s = "{";
        for(var i=0;i<this.keys.length - 1;i++,s+=',')
        {
            var k = this.keys[i];
            s += k+"="+this.data[k];
        }
        var k = this.keys[i];
        s += k+"="+this.data[k];
        s+="}";
        return s;
    };
}


function testMap()
{
    var m = new Map();
    m.put(3,'value3');
    m.put(2,'value2');
    m.put(1,'value1');
    alert("init:"+m);

    m.SortNumber();
    alert("Sorted as Number"+m);
    
    alert(m.get("key1"));
    
    m.put('key1','set key');
    alert("set key1:"+m);
    
    m.remove("key2");
    alert("remove key2: "+m);
    
    var s ="";
    m.each(function(key,value,index)
    {
        s += index+":"+ key+"="+value+"\n";
    });
    alert(s);
}
