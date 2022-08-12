<?php

namespace app\common\service;

use think\Exception;
use Web3\Web3;
use Web3\Providers\HttpProvider;
use Web3\RequestManagers\HttpRequestManager;
use Web3\Utils;

/**
 * Web3相关服务
 */
class Web3Service
{
    /**
     * @var Web3
     */
    public $web3;

    /**
     * @var string 节点地址
     */
    public string $provider;

    /**
     * @var int ChainId 侧链ID
     */
    public int $chainId;

    /**
     * 代币合约ABI数据
     */
    public string $abi;

    /**
     * @var string 代币合约地址
     */
    public string $contract = '';

    /**
     * @var string data数据
     */
    public string $data = '';

    /**
     * @var float 代币余额
     */
    public $balance;

    /**
     * @var string 交易hash
     */
    public string $tx;

    /**
     * @var string nonce
     */
    public string $nonce;

    /**
     * @var string gasPrice 油费单价
     */
    public string $gasPrice;

    /**
     * 离线签名数据
     */
    public string $sign;

    /**
     * @var string Gas 油费
     */
    public string $gas;

    /**
     * @var string heightGas 高油费
     */
    public string $heightGas;

    /**
     * @var string 合约函数名
     */
    public string $methods = 'transfer';

    /**
     * @var string 价格
     */
    public float $price;

    public function __construct($name = '')
    {
        $this->provider = config('bsc.provider');
        $this->gas = config('bsc.gas');
        $this->heightGas = config('bsc.heightGas');
        $this->chainId = config('bsc.chainId');
        // 默认USDT合约地址和ABI
        $this->contract = config('bsc.contract');
        $this->abi = config('bsc.abi');
        $this->decimals = config('bsc.decimals');
        $this->web3 = new Web3(new HttpProvider(new HttpRequestManager($this->provider, 15)));
    }

    /**
     * @notes 查询BNB余额
     * @param array $data 数据
     * @return String
     */
    public function getBalance(array $data): string
    {
        try {
            $this->web3->eth->getBalance($data['address'] ,function ($err, $balance) {
                if ($err !== null) throw new Exception('查询余额失败：'.$err->getMessage());
                $this->balance = bcdiv(bchexdec(Utils::toHex($balance[0])), bcpow(10, 18), 18);
            });
            return $this->balance;
        } catch (\Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    // .......
}